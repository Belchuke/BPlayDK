using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BPlayServer.Models
{
    public partial class masterContext : DbContext
    {
        public masterContext()
        {
        }

        public masterContext(DbContextOptions<masterContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Amovie> Amovie { get; set; }
        public virtual DbSet<Auser> Auser { get; set; }
        public virtual DbSet<AuserPreviousBoughtSnacks> AuserPreviousBoughtSnacks { get; set; }
        public virtual DbSet<AuserSeen> AuserSeen { get; set; }
        public virtual DbSet<AuserType> AuserType { get; set; }
        public virtual DbSet<BoughtSnacks> BoughtSnacks { get; set; }
        public virtual DbSet<Cinema> Cinema { get; set; }
        public virtual DbSet<MoviePlaying> MoviePlaying { get; set; }
        public virtual DbSet<Reservation> Reservation { get; set; }
        public virtual DbSet<Seats> Seats { get; set; }
        public virtual DbSet<SnacksSelling> SnacksSelling { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-D6EIG2B\\JCBSQLSERVER;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Amovie>(entity =>
            {
                entity.HasKey(e => e.MovieId);

                entity.ToTable("AMovie");

                entity.Property(e => e.MovieId).HasColumnName("MovieID");

                entity.Property(e => e.ImdbId).HasColumnName("imdbID");

                entity.Property(e => e.ImdbRating).HasColumnName("imdbRating");

                entity.Property(e => e.ImdbVotes).HasColumnName("imdbVotes");

                entity.Property(e => e.Runtime).IsRequired();
            });

            modelBuilder.Entity<Auser>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("AUser");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.AuserPbsid).HasColumnName("AUserPBSID");

                entity.Property(e => e.AuserTypeId).HasColumnName("AUserTypeID");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.ReservationId).HasColumnName("ReservationID");

                entity.Property(e => e.UserName).HasMaxLength(50);

                entity.HasOne(d => d.AuserType)
                    .WithMany(p => p.Auser)
                    .HasForeignKey(d => d.AuserTypeId)
                    .HasConstraintName("FK_AUser_AUserType");
            });

            modelBuilder.Entity<AuserPreviousBoughtSnacks>(entity =>
            {
                entity.HasKey(e => e.AuserPbsid);

                entity.ToTable("AUser_Previous_Bought_Snacks");

                entity.Property(e => e.AuserPbsid).HasColumnName("AUserPBSID");

                entity.Property(e => e.SnacksId).HasColumnName("SnacksID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Snacks)
                    .WithMany(p => p.AuserPreviousBoughtSnacks)
                    .HasForeignKey(d => d.SnacksId)
                    .HasConstraintName("FK_AUser_Previous_Bought_Snacks_Snacks_Selling");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AuserPreviousBoughtSnacks)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_AUser_Previous_Bought_Snacks_AUser");
            });

            modelBuilder.Entity<AuserSeen>(entity =>
            {
                entity.ToTable("AUserSeen");

                entity.Property(e => e.AuserSeenId).HasColumnName("AUserSeenID");

                entity.Property(e => e.MovieId).HasColumnName("MovieID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.AuserSeen)
                    .HasForeignKey(d => d.MovieId)
                    .HasConstraintName("FK_AUserSeen_AMovie");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AuserSeen)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_AUserSeen_AUser");
            });

            modelBuilder.Entity<AuserType>(entity =>
            {
                entity.ToTable("AUserType");

                entity.Property(e => e.AuserTypeId).HasColumnName("AUserTypeID");

                entity.Property(e => e.UserType).HasMaxLength(5);
            });

            modelBuilder.Entity<BoughtSnacks>(entity =>
            {
                entity.ToTable("Bought_Snacks");

                entity.Property(e => e.BoughtSnacksId).HasColumnName("BoughtSnacksID");

                entity.Property(e => e.ReservationId).HasColumnName("ReservationID");

                entity.Property(e => e.SnacksId).HasColumnName("SnacksID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Reservation)
                    .WithMany(p => p.BoughtSnacks)
                    .HasForeignKey(d => d.ReservationId)
                    .HasConstraintName("FK_Bought_Snacks_Reservation");
            });

            modelBuilder.Entity<Cinema>(entity =>
            {
                entity.Property(e => e.CinemaId).HasColumnName("CinemaID");

                entity.Property(e => e.CinemaName).HasMaxLength(100);

                entity.Property(e => e.MovieId).HasColumnName("MovieID");

                entity.Property(e => e.MoviePlayingId).HasColumnName("MoviePlayingID");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.Cinema)
                    .HasForeignKey(d => d.MovieId)
                    .HasConstraintName("FK_Cinema_AMovie");

                entity.HasOne(d => d.MoviePlaying)
                    .WithMany(p => p.Cinema)
                    .HasForeignKey(d => d.MoviePlayingId)
                    .HasConstraintName("FK_Cinema_MoviePlaying");
            });

            modelBuilder.Entity<MoviePlaying>(entity =>
            {
                entity.Property(e => e.MovieplayingId).HasColumnName("MovieplayingID");

                entity.Property(e => e.DatePlaying).HasColumnType("datetime");

                entity.Property(e => e.MovieId).HasColumnName("MovieID");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.MoviePlaying)
                    .HasForeignKey(d => d.MovieId)
                    .HasConstraintName("FK_MoviePlaying_AMovie");
            });

            modelBuilder.Entity<Reservation>(entity =>
            {
                entity.Property(e => e.ReservationId).HasColumnName("ReservationID");

                entity.Property(e => e.BoughtSnacksId).HasColumnName("BoughtSnacksID");

                entity.Property(e => e.CinemaId).HasColumnName("CinemaID");

                entity.Property(e => e.MovieId).HasColumnName("MovieID");

                entity.Property(e => e.SeatsId).HasColumnName("SeatsID");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Cinema)
                    .WithMany(p => p.Reservation)
                    .HasForeignKey(d => d.CinemaId)
                    .HasConstraintName("FK_Reservation_Cinema");

                entity.HasOne(d => d.Movie)
                    .WithMany(p => p.Reservation)
                    .HasForeignKey(d => d.MovieId)
                    .HasConstraintName("FK_Reservation_AMovie");

                entity.HasOne(d => d.Seats)
                    .WithMany(p => p.Reservation)
                    .HasForeignKey(d => d.SeatsId)
                    .HasConstraintName("FK_Reservation_Seats");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Reservation)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Reservation_AUser");
            });

            modelBuilder.Entity<Seats>(entity =>
            {
                entity.Property(e => e.SeatsId).HasColumnName("SeatsID");

                entity.Property(e => e.CinemaId).HasColumnName("CinemaID");

                entity.Property(e => e.SeatIdentity).HasMaxLength(100);

                entity.HasOne(d => d.Cinema)
                    .WithMany(p => p.Seats)
                    .HasForeignKey(d => d.CinemaId)
                    .HasConstraintName("FK_Seats_Cinema");
            });

            modelBuilder.Entity<SnacksSelling>(entity =>
            {
                entity.HasKey(e => e.SnackId);

                entity.ToTable("Snacks_Selling");

                entity.Property(e => e.SnackId).HasColumnName("SnackID");

                entity.Property(e => e.SnacksName)
                    .HasColumnName("Snacks_Name")
                    .HasMaxLength(100);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
