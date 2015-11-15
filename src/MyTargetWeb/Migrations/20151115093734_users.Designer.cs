using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Relational.Migrations.Infrastructure;
using MyTarget.Models;

namespace MyTargetWeb.Migrations
{
    [ContextType(typeof(ApplicationContext))]
    partial class users
    {
        public override string Id
        {
            get { return "20151115093734_users"; }
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
                        .StoreGeneratedPattern(StoreGeneratedPattern.Identity)
                        .Annotation("SqlServer:ValueGeneration", "Identity");
                    
                    b.Property<DateTime>("Created");
                    
                    b.Property<bool>("IsActive")
                        .Annotation("Relational:ColumnDefaultValue", "False")
                        .Annotation("Relational:ColumnDefaultValueType", "System.Boolean");
                    
                    b.Property<string>("Login")
                        .Required()
                        .Annotation("MaxLength", 30);
                    
                    b.Property<byte[]>("Timestamp")
                        .ConcurrencyToken()
                        .Required();
                    
                    b.Key("Id");
                });
        }
    }
}
