'use strict';

import axios from 'axios';

let vm = new Vue( {
    el: '#qiita-posts',
    data: {
        posts: void(0),
    },
    methods: {
        request: () => {
            axios.get( 'https://qiita.com/api/v2/users/[QiitaユーザID]/items' )
                .then( ( res ) => {
                    vm.posts = res.data;
                } )
                .catch( ( res ) => {
                    console.error( res );
                } );
        }
    },
} );
