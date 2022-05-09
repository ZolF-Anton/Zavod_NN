import * as React from 'react';
import { useState, useEffect } from 'react';

import Selectmin from './Selectmin';
import Partlist from './Partlist';
import Schemamin from './Schememin';
import cn from 'classnames';
import { cataloglist__wrap, cataloglist__wrap__mainpage } from './cataloglist.module.scss';

const CatalogListMin = () => {
    return (
        <div>
            <div className={cn(cataloglist__wrap, cataloglist__wrap__mainpage)}>
                <Selectmin />
                <Schemamin />
            </div>
        </div>
    );
};

export default CatalogListMin;
