export async function fetchUserProfile(user) {
    if (!user) {
        throw new Error("No user provided");
    }

    const token = await user.getIdToken();

    const res = await fetch("http://localhost:3000/api/users/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch user profile");
    }
    const data = await res.json();
    return data;
}