-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Bulan Mei 2025 pada 17.24
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `books`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(2, 'database/migrations/1747018149265_create_books_table', 1, '2025-05-19 07:34:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `adonis_schema_versions`
--

CREATE TABLE `adonis_schema_versions` (
  `version` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `adonis_schema_versions`
--

INSERT INTO `adonis_schema_versions` (`version`) VALUES
(2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `books`
--

CREATE TABLE `books` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `category`, `created_at`, `updated_at`) VALUES
(11, 'filosofi kopi', 'kapal api', 'ilmu', '2025-05-21 06:57:39', '2025-05-21 06:57:39'),
(12, 'ambatron dan rusdi', 'MR ironi', 'fiksi', '2025-05-21 07:01:10', '2025-05-21 07:01:10'),
(13, 'harry potter', 'J. K. Rowling', 'fiksi', '2025-05-21 07:06:05', '2025-05-21 07:29:02'),
(18, 'motivation', 'ambativasi', 'ilmu', '2025-05-21 17:46:10', '2025-05-21 17:46:10'),
(19, 'Filosofi Teras', 'Henry Manampiring', 'ilmu', '2025-05-21 19:22:37', '2025-05-21 19:22:37'),
(20, 'the power of wahuu', 'udin', 'ilmu', '2025-05-21 20:47:32', '2025-05-21 20:47:32'),
(21, 'fdf', 'hai hitlerrr', 'ilmu', '2025-05-23 08:10:07', '2025-05-23 08:10:07');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `adonis_schema_versions`
--
ALTER TABLE `adonis_schema_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indeks untuk tabel `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `books`
--
ALTER TABLE `books`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
