namespace MyTargetWebUpdate.Controllers.Models
{
  public class StockChangeModel
  {
    public long ProductId{ get; set;}
    public int StoredQuantity { get; set;}
    public bool AddProducts {get;set;}
    public string Comment {get;set;}
  }
}
