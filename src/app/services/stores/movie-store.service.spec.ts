import {TestBed} from '@angular/core/testing';

import {MovieStoreService} from './movie-store.service';

describe('MovieStoreService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: MovieStoreService = TestBed.get(MovieStoreService);
        expect(service).toBeTruthy();
    });
});
