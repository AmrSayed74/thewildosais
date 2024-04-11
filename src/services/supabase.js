import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mgydawiupshhfutbxcgf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1neWRhd2l1cHNoaGZ1dGJ4Y2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NTAyMjcsImV4cCI6MjAyNDEyNjIyN30.HVDfzSqwEkRHDgWKffDropTB5zYxhYnmZUfOsmZWOdA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
