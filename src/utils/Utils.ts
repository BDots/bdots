export class Utils{

    public static subscribeToParentStore(store : any) : any {
        return target => {
            let didMount = target.prototype.componentDidMount;
            target.prototype.componentDidMount = function () {
                if (didMount != null)
                    didMount.call(this);
                this.unsubscribe = store.subscribe(() => this.forceUpdate());
            };

            let willUnmount = target.prototype.componentWillUnmount;
            target.prototype.componentWillUnmount = function () {
                if (willUnmount != null)
                    willUnmount.call(this);

                this.unsubscribe();
            }
        }
    }

    public static subscribeToStore() : any {
        return target => {
            let didMount = target.prototype.componentDidMount;
            target.prototype.componentDidMount = function () {
                if (didMount != null)
                    didMount.call(this);
                this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
            };

            let willUnmount = target.prototype.componentWillUnmount;
            target.prototype.componentWillUnmount = function () {
                if (willUnmount != null)
                    willUnmount.call(this);

                this.unsubscribe();
            }
        }
    }



    public static Links() : any{
        let aLinksList : any[] = [];
        aLinksList.push({
            "blogUrl": "http://bdots.net/blog",
            "bbsUrl": "http://bdots.net/bbs/",
            "gitUrl": "###",
            "demoUrl": "http://bdots.net/demo/"
        });

        return aLinksList;
    }

    public static ImagesUrl() : any {
        let aImagesUrlList : any[] = [];
        aImagesUrlList.push({
            "webcharqrimg": "src/images/weixinqrcode.png"
        });

        return aImagesUrlList;
    }

    public static stringIsNullOrEmpty(obj : string) : boolean{
        if(obj == undefined || obj == null){
           return true;
        }

        if(obj.toString().trim().length <= 0){
            return true;
        }

        return false;
    }
}

