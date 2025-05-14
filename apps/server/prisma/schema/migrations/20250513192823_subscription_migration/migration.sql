-- CreateEnum
CREATE TYPE "plan" AS ENUM ('free', 'pro', 'standard', 'enterprise');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('active', 'canceled', 'pending', 'trialing', 'past_due', 'unpaid', 'incomplete', 'incomplete_expired');

-- CreateTable
CREATE TABLE "subscription" (
    "_id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "plan" "plan",
    "status" "status" NOT NULL DEFAULT 'unpaid',
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3),

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("_id")
);

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
