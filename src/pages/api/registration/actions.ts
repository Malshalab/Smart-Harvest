'use server'
import supabaseLocals from "@/utils/supabase/defaultClient";
import { event_registration_supabase } from "@/data/event_registration";
import { event_supabase } from "@/data/event";

// Supabase client
const supabase = await supabaseLocals();

// Table alias for event registration
const eventRegistrationTableAlias = '10_event_registration';
const userProfileTableAlias = '02_user_profile';
const eventsTableAlias = '09_events'

// Register user for event
export async function registerUserToEvent(eventId: number): Promise<string> { // Return a string message
    try {
        let userId: number;

        // Step 1: Get the currently logged-in user (if any)
        const { data: userData, error: userError } = await supabase.auth.getUser();

        if (userError || !userData?.user) {
            console.log("No logged-in user, using dummy user_id");
            userId = 427816;  // Assign dummy user_id if no user is logged in
        } else {
            const loggedInUserId = userData.user.id;

            // Step 2: Fetch the user profile to get the corresponding `user_id` from the `user_profile` table
            const { data: userProfileData, error: userProfileError } = await supabase
                .from(userProfileTableAlias)
                .select("user_id")
                .eq("user_id", loggedInUserId)
                .single();

            if (userProfileError || !userProfileData) {
                console.error("Error fetching user profile:", userProfileError);
                throw new Error("Unable to retrieve user profile.");
            }

            userId = userProfileData.user_id;
        }

        // Step 2.1: Check if the user is already registered for this event
        const { data: existingRegistration, error: existingRegistrationError } = await supabase
            .from(eventRegistrationTableAlias)
            .select("registration_id")
            .eq("user_id", userId)
            .eq("event_id", eventId)
            .single();

        if (existingRegistration) {
            // If user is already registered for the same event, return an error message
            console.error("User is already registered for this event.");
            return "You are already registered for this event.";
        }

        // Step 3: Insert the registration record into the `event_registration` table with current timestamp for registration_date
        const { data: registrationData, error: registrationError } = await supabase
            .from(eventRegistrationTableAlias)
            .insert([
                {
                    user_id: userId,
                    event_id: eventId,
                    registration_date: new Date().toISOString(),  // Add current timestamp for registration_date
                },
            ])
            .select();

        if (registrationError) {
            console.error("Error registering user to event:", registrationError);
            return "Failed to register for the event. Please try again.";
        }

        console.log("Registration successful:", registrationData);
        return "Registration successful!"; // Return success message
    } catch (error) {
        console.error("An error occurred during event registration:", error);
        return "An error occurred during registration.";
    }
}