/*
  Warnings:

  - You are about to drop the `item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rcv_form` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[item] DROP CONSTRAINT [item_formid_fkey];

-- DropTable
DROP TABLE [dbo].[item];

-- DropTable
DROP TABLE [dbo].[rcv_form];

-- CreateTable
CREATE TABLE [dbo].[Rcv_Form] (
    [id] INT NOT NULL IDENTITY(1,1),
    [empno] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [cost_dept] NVARCHAR(1000),
    [rcv_dept] NVARCHAR(1000),
    [remark] NVARCHAR(1000),
    CONSTRAINT [Rcv_Form_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Item] (
    [id] INT NOT NULL IDENTITY(1,1),
    [item] NVARCHAR(1000) NOT NULL,
    [qty] INT NOT NULL,
    [formid] INT NOT NULL,
    CONSTRAINT [Item_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Item] ADD CONSTRAINT [Item_formid_fkey] FOREIGN KEY ([formid]) REFERENCES [dbo].[Rcv_Form]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
