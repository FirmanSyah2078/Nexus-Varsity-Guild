"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const username = formData.get("username")?.toString(); // Sesuai form kamu (Callsign)

  if (!email || !password || !username) {
    return { error: "Data tidak lengkap. Gagal inisiasi protokol." };
  }

  try {
    // 1. Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email sudah terdaftar di sistem NVI." };
    }

    // 2. Acak passwordnya
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. FITUR GATEKEEPER (AUTO-APPROVE)
    // Cek apakah email ada di Data Master Kampus
    const isMasterData = await prisma.masterMahasiswa.findUnique({
      where: { emailPribadi: email }
    });

    // 4. Simpan ke database
    await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: hashedPassword,
        // Jika cocok dengan Master, otomatis jadi MAHASISWA & Verified
        role: isMasterData ? "MAHASISWA" : "USER",
        isVerified: isMasterData ? true : false, 
        nim: isMasterData ? isMasterData.nim : null,
      },
    });

    return { success: "Registrasi berhasil! Silakan login." };

  } catch (error) {
    console.error("Error Register:", error);
    return { error: "Terjadi kesalahan internal server." };
  }
}