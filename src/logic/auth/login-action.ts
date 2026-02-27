"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginUser(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return { error: "Kredensial tidak lengkap." };
  }

  try {
    // Memanggil mesin Auth.js yang sudah kita atur di src/auth.ts
    await signIn("credentials", {
      email,
      password,
      redirect: false, // Kita set false agar bisa mengontrol efek UI-nya nanti
    });
    
    return { success: "Akses Diberikan." };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Email atau Encryption Key salah." };
        default:
          return { error: "Gagal terhubung ke NVI Core." };
      }
    }
    throw error; // Wajib di-throw ulang jika bukan error Auth.js (aturan Next.js)
  }
}