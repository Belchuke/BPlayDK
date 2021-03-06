USE [BPLAYDK]
GO
/****** Object:  Table [dbo].[AMovie]    Script Date: 23/09/2020 09:46:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AMovie](
	[MovieID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NULL,
	[MovieYear] [nvarchar](max) NULL,
	[Released] [nvarchar](max) NULL,
	[Runtime] [nvarchar](max) NOT NULL,
	[Genre] [nvarchar](max) NULL,
	[Director] [nvarchar](max) NULL,
	[Writer] [nvarchar](max) NULL,
	[Actors] [nvarchar](max) NULL,
	[Plot] [nvarchar](max) NULL,
	[MovieLanguage] [nvarchar](max) NULL,
	[Country] [nvarchar](max) NULL,
	[Award] [nvarchar](max) NULL,
	[Poster] [nvarchar](max) NULL,
	[Metascore] [nvarchar](max) NULL,
	[imdbRating] [nvarchar](max) NULL,
	[imdbVotes] [nvarchar](max) NULL,
	[imdbID] [nvarchar](max) NULL,
	[MovieType] [nvarchar](max) NULL,
	[Response] [nvarchar](max) NULL,
	[ServerPath] [nvarchar](max) NULL,
 CONSTRAINT [PK_AMovie] PRIMARY KEY CLUSTERED 
(
	[MovieID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AUser]    Script Date: 23/09/2020 09:46:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AUser](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
	[AUserPBSID] [int] NULL,
	[ReservationID] [int] NULL,
	[AUserTypeID] [int] NULL,
 CONSTRAINT [PK_AUser] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AUser_Previous_Bought_Snacks]    Script Date: 23/09/2020 09:46:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AUser_Previous_Bought_Snacks](
	[AUserPBSID] [int] IDENTITY(1,1) NOT NULL,
	[SnacksID] [int] NULL,
	[UserID] [int] NULL,
 CONSTRAINT [PK_AUser_Previous_Bought_Snacks] PRIMARY KEY CLUSTERED 
(
	[AUserPBSID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AUserSeen]    Script Date: 23/09/2020 09:46:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AUserSeen](
	[AUserSeenID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NULL,
	[MovieID] [int] NULL,
 CONSTRAINT [PK_AUserSeen] PRIMARY KEY CLUSTERED 
(
	[AUserSeenID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AUserType]    Script Date: 23/09/2020 09:46:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AUserType](
	[AUserTypeID] [int] IDENTITY(1,1) NOT NULL,
	[UserType] [nvarchar](5) NULL,
 CONSTRAINT [PK_AUserType] PRIMARY KEY CLUSTERED 
(
	[AUserTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bought_Snacks]    Script Date: 23/09/2020 09:46:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bought_Snacks](
	[BoughtSnacksID] [int] IDENTITY(1,1) NOT NULL,
	[SnacksID] [int] NULL,
	[UserID] [int] NULL,
	[ReservationID] [int] NULL,
 CONSTRAINT [PK_Bought_Snacks] PRIMARY KEY CLUSTERED 
(
	[BoughtSnacksID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cinema]    Script Date: 23/09/2020 09:46:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cinema](
	[CinemaID] [int] IDENTITY(1,1) NOT NULL,
	[MovieID] [int] NULL,
	[MoviePlayingID] [int] NULL,
	[AmountOfSeats] [int] NULL,
	[CinemaName] [nvarchar](100) NULL,
 CONSTRAINT [PK_Cinema] PRIMARY KEY CLUSTERED 
(
	[CinemaID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MoviePlaying]    Script Date: 23/09/2020 09:46:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MoviePlaying](
	[MovieplayingID] [int] IDENTITY(1,1) NOT NULL,
	[MovieID] [int] NULL,
	[DatePlaying] [datetime] NULL,
 CONSTRAINT [PK_MoviePlaying] PRIMARY KEY CLUSTERED 
(
	[MovieplayingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reservation]    Script Date: 23/09/2020 09:46:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reservation](
	[ReservationID] [int] IDENTITY(1,1) NOT NULL,
	[MovieID] [int] NULL,
	[UserID] [int] NULL,
	[CinemaID] [int] NULL,
	[SeatsID] [int] NULL,
	[BoughtSnacksID] [int] NULL,
 CONSTRAINT [PK_Reservation] PRIMARY KEY CLUSTERED 
(
	[ReservationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Seats]    Script Date: 23/09/2020 09:46:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Seats](
	[SeatsID] [int] IDENTITY(1,1) NOT NULL,
	[CinemaID] [int] NULL,
	[Reserved] [bit] NULL,
	[SeatIdentity] [nvarchar](100) NULL,
 CONSTRAINT [PK_Seats] PRIMARY KEY CLUSTERED 
(
	[SeatsID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Snacks_Selling]    Script Date: 23/09/2020 09:46:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Snacks_Selling](
	[SnackID] [int] IDENTITY(1,1) NOT NULL,
	[Snacks_Name] [nvarchar](100) NULL,
	[SnackImg] [nvarchar](max) NULL,
 CONSTRAINT [PK_Snacks_Selling] PRIMARY KEY CLUSTERED 
(
	[SnackID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[AUser]  WITH CHECK ADD  CONSTRAINT [FK_AUser_AUserType] FOREIGN KEY([AUserTypeID])
REFERENCES [dbo].[AUserType] ([AUserTypeID])
GO
ALTER TABLE [dbo].[AUser] CHECK CONSTRAINT [FK_AUser_AUserType]
GO
ALTER TABLE [dbo].[AUser_Previous_Bought_Snacks]  WITH CHECK ADD  CONSTRAINT [FK_AUser_Previous_Bought_Snacks_AUser] FOREIGN KEY([UserID])
REFERENCES [dbo].[AUser] ([UserID])
GO
ALTER TABLE [dbo].[AUser_Previous_Bought_Snacks] CHECK CONSTRAINT [FK_AUser_Previous_Bought_Snacks_AUser]
GO
ALTER TABLE [dbo].[AUser_Previous_Bought_Snacks]  WITH CHECK ADD  CONSTRAINT [FK_AUser_Previous_Bought_Snacks_Snacks_Selling] FOREIGN KEY([SnacksID])
REFERENCES [dbo].[Snacks_Selling] ([SnackID])
GO
ALTER TABLE [dbo].[AUser_Previous_Bought_Snacks] CHECK CONSTRAINT [FK_AUser_Previous_Bought_Snacks_Snacks_Selling]
GO
ALTER TABLE [dbo].[AUserSeen]  WITH CHECK ADD  CONSTRAINT [FK_AUserSeen_AMovie] FOREIGN KEY([MovieID])
REFERENCES [dbo].[AMovie] ([MovieID])
GO
ALTER TABLE [dbo].[AUserSeen] CHECK CONSTRAINT [FK_AUserSeen_AMovie]
GO
ALTER TABLE [dbo].[AUserSeen]  WITH CHECK ADD  CONSTRAINT [FK_AUserSeen_AUser] FOREIGN KEY([UserID])
REFERENCES [dbo].[AUser] ([UserID])
GO
ALTER TABLE [dbo].[AUserSeen] CHECK CONSTRAINT [FK_AUserSeen_AUser]
GO
ALTER TABLE [dbo].[Bought_Snacks]  WITH CHECK ADD  CONSTRAINT [FK_Bought_Snacks_Reservation] FOREIGN KEY([ReservationID])
REFERENCES [dbo].[Reservation] ([ReservationID])
GO
ALTER TABLE [dbo].[Bought_Snacks] CHECK CONSTRAINT [FK_Bought_Snacks_Reservation]
GO
ALTER TABLE [dbo].[Cinema]  WITH CHECK ADD  CONSTRAINT [FK_Cinema_AMovie] FOREIGN KEY([MovieID])
REFERENCES [dbo].[AMovie] ([MovieID])
GO
ALTER TABLE [dbo].[Cinema] CHECK CONSTRAINT [FK_Cinema_AMovie]
GO
ALTER TABLE [dbo].[Cinema]  WITH CHECK ADD  CONSTRAINT [FK_Cinema_MoviePlaying] FOREIGN KEY([MoviePlayingID])
REFERENCES [dbo].[MoviePlaying] ([MovieplayingID])
GO
ALTER TABLE [dbo].[Cinema] CHECK CONSTRAINT [FK_Cinema_MoviePlaying]
GO
ALTER TABLE [dbo].[MoviePlaying]  WITH CHECK ADD  CONSTRAINT [FK_MoviePlaying_AMovie] FOREIGN KEY([MovieID])
REFERENCES [dbo].[AMovie] ([MovieID])
GO
ALTER TABLE [dbo].[MoviePlaying] CHECK CONSTRAINT [FK_MoviePlaying_AMovie]
GO
ALTER TABLE [dbo].[Reservation]  WITH CHECK ADD  CONSTRAINT [FK_Reservation_AMovie] FOREIGN KEY([MovieID])
REFERENCES [dbo].[AMovie] ([MovieID])
GO
ALTER TABLE [dbo].[Reservation] CHECK CONSTRAINT [FK_Reservation_AMovie]
GO
ALTER TABLE [dbo].[Reservation]  WITH CHECK ADD  CONSTRAINT [FK_Reservation_AUser] FOREIGN KEY([UserID])
REFERENCES [dbo].[AUser] ([UserID])
GO
ALTER TABLE [dbo].[Reservation] CHECK CONSTRAINT [FK_Reservation_AUser]
GO
ALTER TABLE [dbo].[Reservation]  WITH CHECK ADD  CONSTRAINT [FK_Reservation_Cinema] FOREIGN KEY([CinemaID])
REFERENCES [dbo].[Cinema] ([CinemaID])
GO
ALTER TABLE [dbo].[Reservation] CHECK CONSTRAINT [FK_Reservation_Cinema]
GO
ALTER TABLE [dbo].[Reservation]  WITH CHECK ADD  CONSTRAINT [FK_Reservation_Seats] FOREIGN KEY([SeatsID])
REFERENCES [dbo].[Seats] ([SeatsID])
GO
ALTER TABLE [dbo].[Reservation] CHECK CONSTRAINT [FK_Reservation_Seats]
GO
ALTER TABLE [dbo].[Seats]  WITH CHECK ADD  CONSTRAINT [FK_Seats_Cinema] FOREIGN KEY([CinemaID])
REFERENCES [dbo].[Cinema] ([CinemaID])
GO
ALTER TABLE [dbo].[Seats] CHECK CONSTRAINT [FK_Seats_Cinema]
GO
