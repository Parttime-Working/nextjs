/*
  Warnings:

  - You are about to drop the column `email` on the `rcv_form` table. All the data in the column will be lost.
  - You are about to drop the column `item` on the `rcv_form` table. All the data in the column will be lost.
  - Added the required column `empno` to the `rcv_form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `rcv_form` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[rcv_form] DROP CONSTRAINT [rcv_form_email_key];

-- AlterTable
ALTER TABLE [dbo].[rcv_form] DROP COLUMN [email],
[item];
ALTER TABLE [dbo].[rcv_form] ADD [cost_dept] NVARCHAR(1000),
[empno] NVARCHAR(1000) NOT NULL,
[name] NVARCHAR(1000) NOT NULL,
[rcv_dept] NVARCHAR(1000),
[remark] NVARCHAR(1000);

-- CreateTable
CREATE TABLE [dbo].[item] (
    [id] INT NOT NULL IDENTITY(1,1),
    [item] NVARCHAR(1000) NOT NULL,
    [qty] INT NOT NULL,
    [formid] INT NOT NULL,
    CONSTRAINT [item_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[item] ADD CONSTRAINT [item_formid_fkey] FOREIGN KEY ([formid]) REFERENCES [dbo].[rcv_form]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
