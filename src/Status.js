'use strict';
class Status {
    constructor() {
        this.setPlaying();
    }
    /** Это значит что мы играем. */
    setPlaying() {
        this.status = 'playing';
    }
    /**
     * @returns {boolean} если мы сейчас играем, тогда true, иначе false.
     */
    isStatusPlaying() {
        return this.status === 'playing';
    }

}