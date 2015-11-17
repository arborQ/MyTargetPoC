using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Relational.Migrations.Infrastructure;
using MyTarget.Models;

namespace MyTargetWeb.Migrations
{
    [ContextType(typeof(ApplicationContext))]
    partial class initusers
    {
        public override string Id
        {
            get { return "20151117104651_initusers"; }
        }
        
        public override string ProductVersion
        {
            get { return "7.0.0-beta5-13549"; }
        }
        
        public override void BuildTargetModel(ModelBuilder builder)
        {
            builder
                .Annotation("SqlServer:DefaultSequenceName", "DefaultSequence")
                .Annotation("SqlServer:Sequence:.DefaultSequence", "'DefaultSequence', '', '1', '10', '', '', 'Int64', 'False'")
                .Annotation("SqlServer:ValueGeneration", "Sequence");
            
            builder.Entity("MyTarget.Models.User", b =>
                {
                    b.Property<long>("Id")
                        .GenerateValueOnAdd()
                        .StoreGeneratedPattern(StoreGeneratedPattern.Identity);
                    
                    b.Property<DateTime>("Created");
                    
                    b.Property<bool>("IsActive");
                    
                    b.Property<string>("Login");
                    
                    b.Property<byte[]>("Timestamp");
                    
                    b.Key("Id");
                });
        }
    }
}
