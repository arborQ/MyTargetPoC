using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using MyTargetWebUpdate.Models;

namespace MyTargetWebUpdate.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20160115182921_dictionary_properties")]
    partial class dictionary_properties
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0-rc1-16348")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MyTargetWebUpdate.Models.DictionaryProperty", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .HasAnnotation("MaxLength", 200);

                    b.Property<string>("GroupKey")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 20);

                    b.Property<int>("Order");

                    b.Property<string>("PropertyValue")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 50);

                    b.HasKey("Id");
                });

            modelBuilder.Entity("MyTargetWebUpdate.Models.Product", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 50);

                    b.Property<string>("Color")
                        .HasAnnotation("MaxLength", 20);

                    b.Property<string>("Location")
                        .HasAnnotation("MaxLength", 50);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasAnnotation("MaxLength", 100);

                    b.Property<decimal>("NetPrice");

                    b.Property<string>("Size")
                        .HasAnnotation("MaxLength", 20);

                    b.Property<int>("StoredQuantity");

                    b.Property<string>("Supplier")
                        .HasAnnotation("MaxLength", 50);

                    b.Property<decimal>("Tax");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("MyTargetWebUpdate.Models.StockChange", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Comment")
                        .HasAnnotation("MaxLength", 2000);

                    b.Property<DateTime>("Created");

                    b.Property<decimal>("NetPrice");

                    b.Property<long?>("RelatedProductId");

                    b.Property<long>("StoredQuantity");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("MyTargetWebUpdate.Models.StockChange", b =>
                {
                    b.HasOne("MyTargetWebUpdate.Models.Product")
                        .WithMany()
                        .HasForeignKey("RelatedProductId");
                });
        }
    }
}
