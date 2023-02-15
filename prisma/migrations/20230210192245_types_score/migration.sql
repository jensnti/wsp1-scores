-- CreateTable
CREATE TABLE `Score` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `score` INTEGER NOT NULL DEFAULT 0,
    `handle` VARCHAR(6) NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `gameId` INTEGER UNSIGNED NOT NULL,

    UNIQUE INDEX `id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Score` ADD CONSTRAINT `Score_gameId_fkey` FOREIGN KEY (`gameId`) REFERENCES `Game`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;