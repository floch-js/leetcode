var MinStack = function() {
    this._stack = []
    this._currentMin = +Infinity
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this._currentMin = Math.min(val, this._currentMin)
    this._stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popped = this._stack.pop()
    
    if (popped === this._currentMin)
        this._currentMin = Math.min(...this._stack)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._stack[this._stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this._currentMin
}
