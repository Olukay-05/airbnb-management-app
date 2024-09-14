import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zyokwpbzatuhnfkcoaqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5b2t3cGJ6YXR1aG5ma2NvYXFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5Mjg2MDcsImV4cCI6MjA0MTUwNDYwN30.hP6YCbxt4RJijIqe9vWsFR4u59NuXKMZLDowSi7r0_I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
