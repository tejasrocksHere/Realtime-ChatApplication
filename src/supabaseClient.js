import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cfuqlewhanucaxordeui.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmdXFsZXdoYW51Y2F4b3JkZXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4Mzc0MTUsImV4cCI6MjA0MDQxMzQxNX0.d58NXfF-Pnn6YPtznbuxlCsnQlNQkzMvsVQ6tY7oXvY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
