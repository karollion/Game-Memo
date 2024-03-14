/*
  Warnings:

  - Made the column `winAt` on table `score` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `score` MODIFY `winAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
