/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rcv_Form` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Item] DROP CONSTRAINT [Item_formid_fkey];

-- DropTable
DROP TABLE [dbo].[Item];

-- DropTable
DROP TABLE [dbo].[Rcv_Form];

-- CreateTable
CREATE TABLE [dbo].[rcv_form] (
    [id] INT NOT NULL IDENTITY(1,1),
    [empno] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [cost_dept] NVARCHAR(1000),
    [rcv_dept] NVARCHAR(1000),
    [remark] NVARCHAR(1000),
    CONSTRAINT [rcv_form_pkey] PRIMARY KEY CLUSTERED ([id])
);

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
