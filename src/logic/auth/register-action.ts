// src/app/actions/register-action.ts (sesuaikan dengan path foldermu)
"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const username = formData.get("username")?.toString(); // Callsign

  if (!email || !password || !username) {
    return { error: "Data tidak lengkap. Gagal inisiasi protokol." };
  }

  try {
    // 1. Cek apakah email sudah terdaftar di sistem NVI
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email sudah terdaftar di sistem NVI." };
    }

    // 2. Acak passwordnya (Enkripsi tingkat dasar)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Simpan ke database (MURNI SEBAGAI USER BARU)
    // Kita hapus pengecekan MasterMahasiswa di sini.
    // Prisma akan otomatis menggunakan nilai default dari schema:
    // role: "USER" dan isVerified: false
    await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: hashedPassword,
      },
    });

    return { success: "Registrasi berhasil! Silakan login untuk melengkapi profil." };

  } catch (error) {
    console.error("Error Register:", error);
    return { error: "Terjadi kesalahan internal server." };
  }
}