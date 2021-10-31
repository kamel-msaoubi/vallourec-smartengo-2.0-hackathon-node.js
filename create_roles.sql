/****** Script de la commande SelectTopNRows à partir de SSMS  ******/
insert into [smartengo].[dbo].[roles] ([id], [name], [createdAt], [updatedAt]) values
	(1, 'user', GETDATE(), GETDATE()),
	(2, 'admin', GETDATE(), GETDATE())

SELECT TOP (1000) [id]
      ,[name]
      ,[createdAt]
      ,[updatedAt]
  FROM [smartengo].[dbo].[roles]

 