-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Jun-2023 às 04:34
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `aerodromo`
--
CREATE DATABASE IF NOT EXISTS `aerodromo` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `aerodromo`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aeronaves`
--

CREATE TABLE `aeronaves` (
  `IDAviao` int(11) NOT NULL,
  `Matricula` varchar(255) DEFAULT NULL,
  `Pais` varchar(255) DEFAULT NULL,
  `Modelo` varchar(255) DEFAULT NULL,
  `Tipo` varchar(255) DEFAULT NULL,
  `HorasVoo` float DEFAULT NULL,
  `Modificacoes` int(11) DEFAULT NULL,
  `PrecoHora` decimal(10,2) DEFAULT NULL,
  `Disponibilidade` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `aeronaves`
--

INSERT INTO `aeronaves` (`IDAviao`, `Matricula`, `Pais`, `Modelo`, `Tipo`, `HorasVoo`, `Modificacoes`, `PrecoHora`, `Disponibilidade`) VALUES
(2147483647, NULL, NULL, NULL, NULL, NULL, 12412412, NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `modificacao`
--

CREATE TABLE `modificacao` (
  `IDaviao` int(11) DEFAULT NULL,
  `DetalhesModificacao` varchar(255) DEFAULT NULL,
  `IDMod` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `modificacao`
--

INSERT INTO `modificacao` (`IDaviao`, `DetalhesModificacao`, `IDMod`) VALUES
(12312, '21312', 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `aeronaves`
--
ALTER TABLE `aeronaves`
  ADD PRIMARY KEY (`IDAviao`),
  ADD UNIQUE KEY `Matricula` (`Matricula`);

--
-- Índices para tabela `modificacao`
--
ALTER TABLE `modificacao`
  ADD PRIMARY KEY (`IDMod`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aeronaves`
--
ALTER TABLE `aeronaves`
  MODIFY `IDAviao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2147483648;

--
-- AUTO_INCREMENT de tabela `modificacao`
--
ALTER TABLE `modificacao`
  MODIFY `IDMod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
