"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
function combineResolvers(mocks) {
    if (mocks === void 0) { mocks = []; }
    return mocks.reduce(function (_a, mock) {
        var MemoQuery = _a.Query, MemoMutation = _a.Mutation, memoTypes = __rest(_a, ["Query", "Mutation"]);
        var _b = mock.Query, Query = _b === void 0 ? {} : _b, _c = mock.Mutation, Mutation = _c === void 0 ? {} : _c, types = __rest(mock, ["Query", "Mutation"]);
        return __assign({ Query: __assign({}, MemoQuery, Query), Mutation: __assign({}, MemoMutation, Mutation) }, memoTypes, types);
    }, { Query: {}, Mutation: {} });
}
exports["default"] = combineResolvers;
