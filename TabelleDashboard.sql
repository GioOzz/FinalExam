create table Clienti(
	IdCliente numeric(18,0) not null primary key,
	Nome nvarchar(50) not null, 
	Cognome nvarchar(50) not null,
)
create table Costi(
	IdSpesa numeric(18,0) not null primary key, 
	Tipo nvarchar(50) not null, 
	Importo numeric(18,2) not null
)
create table Ordini(
	IdOrdine numeric(18,0) not null primary key, 
	NumCliente numeric (18,0) not null, 
	StatusOrdine bit not null,
	Articolo nvarchar(50) not null,
	Guadagno numeric(18,2) not null,
	foreign key (NumCliente) references Clienti(IdCliente) 
)
create table Profitti(
    IdProfitto numeric(18,0) not null primary key,
	PeriodoProfitto nvarchar(50) not null,
	Profitto numeric(18,2) not null
)
create table Server(
	IdServer numeric(18,0) not null primary key, 
	StatusServer bit not null
)
create table Visite(
	IdVisite numeric(18,0) not null primary key,
	DataAccesso date not null, 
	NumVisite numeric(18,0) not null, 
	GuadagniPagina numeric(18,2) not null
)