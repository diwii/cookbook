export default class Shaders {
    toLoad = {
        vertex: [], // 'vertex1': 'shaders/vertex.c'
        fragment: [] // 'shaders/fragment.c'
    };

    loaded = 0;
    requiredCount = 0;
    failedUrl = [];
    vertex = {};
    fragment = {};

    require = function (sectionName, name, assetUrl) {
        if (!Array.isArray(this.toLoad[sectionName])) {
            this.toLoad[sectionName] = [];
        }

        this.toLoad[sectionName].push(
            {
                name: name,
                url: assetUrl
            }
        );

        return this;
    };

    load = function (callback) {
        const shaderCollection = Object.keys(this.toLoad);

        shaderCollection.forEach((shader) => {
            this.toLoad[shader].forEach(async function(asset) {
                this.requiredCount++;

                try {
                    // if (!Array.isArray(this[shader])) {
                    //     this[shader] = [];
                    // }
                    if (!this.hasOwnProperty(shader)) {
                        this[shader] = {};
                    }

                    console.log(asset);
                    let result = await this.fetchShader(asset.url);

                    

                    this[shader][asset.name] = result.trim();

                    this.loaded++;
                    this.onAssetLoaded(callback);
                } catch (e) {
                    console.error(e);
                    this.failedUrl.push(Object.defineProperty({}, shader, {
                        value: assetUrl
                    }));
                }
            }.bind(this));
        });

        console.log(this.loaded);

        // console.log(this.loaded);
        // console.log(this.requiredCount);

        // let i = 0;
        // while( this.loaded !== this.requiredCount) {
        //     i++;
        //     console.log('waiting');
        //     console.log(this.loaded);

        //     if (i > 20000) {
        //         break;
        //     }
        // }

        // console.log('loaded');

        return this;
    };

    onAssetLoaded = function(callback) {
        if (this.loaded !== this.requiredCount) {
            return;
        }

        callback();
    }

    /**
     * 
     * @param {string} url 
     * @returns string
     */
    fetchShader = async function (url) {
        const result = await fetch(url);

        if (result.status !== 200) {
            throw new Error(`URL: ${url} - STATUS: ${result.status} - ${result.statusText}`);
        } else {
            return await result.text();                
        }
    };
}
