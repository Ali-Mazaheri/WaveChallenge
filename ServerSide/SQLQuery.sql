--USE master
--GO

--IF  EXISTS (SELECT 1 FROM master.dbo.sysdatabases WHERE name = 'Wave')
--BEGIN
--ALTER DATABASE [Wave] SET SINGLE_USER WITH ROLLBACK IMMEDIATE
--DROP DATABASE Wave
--END
--GO

--CREATE DATABASE Wave
--GO

--USE Wave
--GO

--CREATE TABLE Reports (
--Id INT PRIMARY KEY IDENTITY(1,1),
--EmployeeId INT NOT NULL,
--Date DATE NOT NULL,
--JobGroup VARCHAR(3) NOT NULL,
--HoursWorked DECIMAL NOT NULL,
--ReportId INT NOT NULL
--)

--PRINT 'DB is created'

DECLARE @T0 INT = 4;
DECLARE @T1 TABLE (Id INT, VALU NVARCHAR(MAX))
DECLARE @T2 TABLE (Id INT, VALU NVARCHAR(MAX))
DECLARE @T3 TABLE (Id INT, VALU NVARCHAR(MAX))
DECLARE @T4 TABLE (Id INT, VALU NVARCHAR(MAX))


INSERT INTO @T1 VALUES
(1,'A'),
(2,'B'),
(3,'C'),
(4,'D'),
(5,'E')


--INSERT INTO @T2 VALUES
--(1,'F'),
--(3,'G'),
--(5,'H'),
--(7,'I'),
--(9,'J')

--INSERT INTO @T3 VALUES
--(2,'K'),
--(4,'L'),
--(6,'M'),
--(8,'N'),
--(0,'O')

--INSERT INTO @T4 VALUES
--(1,'P'),
--(2,'Q'),
--(4,'R'),
--(5,'S'),
--(7,'T')


--SELECT * FROM @T1 t1
--LEFT OUTER JOIN @T2 t2 -- ON t2.Id = t1.Id
-- LEFT OUTER JOIN @T3 t3 
-- ON t3.Id = t2.Id
-- ON t2.Id = t1.Id

--SELECT * FROM @T1 t1
--LEFT OUTER JOIN @T2 t2  ON t1.Id = t2.Id
--	LEFT  JOIN @T3 t3 	ON t3.Id = t2.Id 
--		LEFT JOIN @T4 t4 
--		ON t4.Id = t3.Id

 

-- SELECT * FROM @T1 t1
--LEFT OUTER JOIN @T2 t2  
--	LEFT  JOIN @T3 t3  
--		LEFT JOIN @T4 t4 
--		ON t4.Id = t3.Id
--	ON t3.Id = t2.Id
-- ON t1.Id = t4.Id


--MERGE @T1 AS Target USING (SELECT 1 AS Id   ) AS Source ON ( Source.Id = Target.Id)
--WHEN MATCHED THEN UPDATE SET target.id =99
--WHEN NOT MATCHED  THEN INSERT VALUES(1,'x')
--OUTPUT Inserted.*
--;

MERGE @T1 AS Target USING (VALUES(10)) AS Source(id) ON ( Source.Id = Target.Id)
WHEN MATCHED THEN UPDATE SET target.id =99
WHEN NOT MATCHED  THEN INSERT VALUES(1,'x')
OUTPUT Inserted.*
;

SELECT * FROM @T1

SELECT (VALUES(5))AS gg