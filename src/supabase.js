import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://adqowpxixvgpgzdsylps.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkcW93cHhpeHZncGd6ZHN5bHBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3NTQ5NjIsImV4cCI6MjAzMTMzMDk2Mn0.L1-TbMRu9EFHcZIjvoqwbTju7TWmsO0P9YB2FYuEP2Y";
export const supabase = createClient(supabaseUrl, supabaseKey);