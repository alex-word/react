export const useUserId = (user) => {
  if (!user) return 0;
  if (user?.user_id) return user?.user_id || 0;
  if (user?.guest_id) return user?.guest_id || 0;
  return 0;
};
