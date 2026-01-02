import { Redirect, Stack } from "expo-router";

const isSignedIn = true; // Replace with your actual authentication logic

export default function ProtectedLayout() {
  if (!isSignedIn) {
    return <Redirect href="/signin" />;
  }

  return (
    <Stack
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
