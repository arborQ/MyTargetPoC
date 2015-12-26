import { get } from 'jquery';
import { defer } from 'q';

module arbor.service {
	export default class ResourceService {
			constructor(private sourceUrl : string){
		  }

		  query<T>(data? : any) : Q.IPromise<T[]> {
				var d = defer();
		    get(this.sourceUrl, data || {})
				.done(d.resolve)
			  .fail(d.reject);

				return d.promise;
		  }

			get<T>(id : number) : Q.IPromise<T>{
				var d = defer();
		    get(this.sourceUrl, { id })
				.done(d.resolve)
			  .fail(d.reject);

				return d.promise;
			}
	}
}
