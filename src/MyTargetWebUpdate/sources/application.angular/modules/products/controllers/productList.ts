import { SortModelController } from "arbor.controllers";

export default class ProductList extends SortModelController<arbor.products.IProduct[]>{
    search: arbor.products.ISearchCriteria;
    sortFields = [
        { key: "Code", name: "Kod" },
        { key: "Name", name: "Nazwa" },
        { key: "Supplier", name: "Dostawca" },
        { key: "NetPrice", name: "Cena" },
        { key: "StoredQuantity", name: "Ilość" },
        { key: "Size", name: "Rozmiar" },
        { key: "Location", name: "Lokacja" },
        { key: "NetPrice*StoredQuantity", name: "Wartość" }
    ];
    constructor($http: ng.IHttpService, public productSizes: any) {
        super("/api/products", $http)
        this.setDefaultFilerState();
    };

    defaultModel() {
        return new Array<arbor.products.IProduct>();
    }

    setDefaultFilerState() {
        this.search = <arbor.products.ISearchCriteria>{
            FreeText: "",
            $showAdvanceSearch: false,
            Size: [],
            NetPrice: <arbor.products.IRangeCriteria>{},
            Quantity: <arbor.products.IRangeCriteria>{}
        };
    }

    toggleSizeFilter(size: string) {
        if (this.search.Size.indexOf(size) === -1) {
            this.search.Size.push(size);
        } else {
            this.search.Size = this.search.Size.filter((s: string) => s !== size);
        }
    }
}
