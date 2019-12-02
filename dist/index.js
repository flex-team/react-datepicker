"use strict";
function _interopDefault(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var React = _interopDefault(require("react"));
require("prop-types");
var classnames = _interopDefault(require("classnames")),
  isDate = _interopDefault(require("date-fns/isDate")),
  isValidDate = _interopDefault(require("date-fns/isValid")),
  format = _interopDefault(require("date-fns/format")),
  addMinutes = _interopDefault(require("date-fns/addMinutes")),
  addHours = _interopDefault(require("date-fns/addHours")),
  utils = _interopDefault(require("date-fns/addDays")),
  utils$1 = _interopDefault(require("date-fns/addWeeks")),
  addMonths = _interopDefault(require("date-fns/addMonths")),
  addYears = _interopDefault(require("date-fns/addYears"));
require("date-fns/subMinutes"), require("date-fns/subHours");
var subDays = _interopDefault(require("date-fns/subDays")),
  subWeeks = _interopDefault(require("date-fns/subWeeks")),
  subMonths = _interopDefault(require("date-fns/subMonths")),
  subYears = _interopDefault(require("date-fns/subYears")),
  getSeconds = _interopDefault(require("date-fns/getSeconds")),
  getMinutes = _interopDefault(require("date-fns/getMinutes")),
  getHours = _interopDefault(require("date-fns/getHours")),
  getDay = _interopDefault(require("date-fns/getDay")),
  getDate = _interopDefault(require("date-fns/getDate")),
  getMonth = _interopDefault(require("date-fns/getMonth")),
  getQuarter = _interopDefault(require("date-fns/getQuarter")),
  getYear = _interopDefault(require("date-fns/getYear")),
  getTime = _interopDefault(require("date-fns/getTime")),
  setSeconds = _interopDefault(require("date-fns/setSeconds")),
  setMinutes = _interopDefault(require("date-fns/setMinutes")),
  setHours = _interopDefault(require("date-fns/setHours")),
  utils$2 = _interopDefault(require("date-fns/setMonth")),
  utils$3 = _interopDefault(require("date-fns/setQuarter")),
  setYear = _interopDefault(require("date-fns/setYear")),
  min = _interopDefault(require("date-fns/min")),
  max = _interopDefault(require("date-fns/max")),
  differenceInCalendarDays = _interopDefault(
    require("date-fns/differenceInCalendarDays")
  ),
  differenceInCalendarMonths = _interopDefault(
    require("date-fns/differenceInCalendarMonths")
  ),
  differenceInCalendarWeeks = _interopDefault(
    require("date-fns/differenceInCalendarWeeks")
  ),
  differenceInCalendarYears = _interopDefault(
    require("date-fns/differenceInCalendarYears")
  ),
  startOfDay = _interopDefault(require("date-fns/startOfDay")),
  startOfWeek = _interopDefault(require("date-fns/startOfWeek")),
  startOfMonth = _interopDefault(require("date-fns/startOfMonth")),
  startOfQuarter = _interopDefault(require("date-fns/startOfQuarter")),
  startOfYear = _interopDefault(require("date-fns/startOfYear")),
  endOfDay = _interopDefault(require("date-fns/endOfDay")),
  endOfWeek = _interopDefault(require("date-fns/endOfWeek"));
require("date-fns/endOfMonth");
var dfIsEqual = _interopDefault(require("date-fns/isEqual")),
  dfIsSameDay = _interopDefault(require("date-fns/isSameDay")),
  dfIsSameMonth = _interopDefault(require("date-fns/isSameMonth")),
  dfIsSameYear = _interopDefault(require("date-fns/isSameYear")),
  dfIsSameQuarter = _interopDefault(require("date-fns/isSameQuarter")),
  isAfter = _interopDefault(require("date-fns/isAfter")),
  isBefore = _interopDefault(require("date-fns/isBefore")),
  isWithinInterval = _interopDefault(require("date-fns/isWithinInterval")),
  toDate = _interopDefault(require("date-fns/toDate")),
  parse = _interopDefault(require("date-fns/parse")),
  parseISO = _interopDefault(require("date-fns/parseISO")),
  longFormatters = _interopDefault(
    require("date-fns/_lib/format/longFormatters")
  ),
  onClickOutside = _interopDefault(require("react-onclickoutside")),
  reactPopper = require("react-popper"),
  reactDom = require("react-dom");
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass(e, t, r) {
  return (
    t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
  );
}
function _defineProperty(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = r),
    e
  );
}
function _extends() {
  return (_extends =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function ownKeys(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function _objectSpread2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(r), !0).forEach(function(t) {
          _defineProperty(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ownKeys(Object(r)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function _inherits(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    t && _setPrototypeOf(e, t);
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function(e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _possibleConstructorReturn(e, t) {
  return !t || ("object" != typeof t && "function" != typeof t)
    ? _assertThisInitialized(e)
    : t;
}
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function newDate(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? parseISO(e)
      : toDate(e)
    : new Date();
  return isValid(t) ? t : null;
}
function parseDate(e, t, r, n) {
  var a = null,
    o = getLocaleObject(r) || getDefaultLocale(),
    s = !0;
  return Array.isArray(t)
    ? (t.forEach(function(t) {
        var r = parse(e, t, new Date(), { locale: o });
        n &&
          (s = isValid(r) && e === format(r, t, { awareOfUnicodeTokens: !0 })),
          isValid(r) && s && (a = r);
      }),
      a)
    : ((a = parse(e, t, new Date(), { locale: o })),
      n
        ? (s = isValid(a) && e === format(a, t, { awareOfUnicodeTokens: !0 }))
        : isValid(a) ||
          ((t = t
            .match(longFormattingTokensRegExp)
            .map(function(e) {
              var t = e[0];
              if ("p" === t || "P" === t) {
                var r = longFormatters[t];
                return o ? r(e, o.formatLong) : t;
              }
              return e;
            })
            .join("")),
          e.length > 0 && (a = parse(e, t.slice(0, e.length), new Date())),
          isValid(a) || (a = new Date(e))),
      isValid(a) && s ? a : null);
}
function isValid(e) {
  return isValidDate(e) && isAfter(e, new Date("1/1/1000"));
}
function formatDate(e, t, r) {
  if ("en" === r) return format(e, t, { awareOfUnicodeTokens: !0 });
  var n = getLocaleObject(r);
  return (
    r &&
      !n &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          r,
          '"].'
        )
      ),
    !n &&
      getDefaultLocale() &&
      getLocaleObject(getDefaultLocale()) &&
      (n = getLocaleObject(getDefaultLocale())),
    format(e, t, { locale: n || null, awareOfUnicodeTokens: !0 })
  );
}
function safeDateFormat(e, t) {
  var r = t.dateFormat,
    n = t.locale;
  return (e && formatDate(e, Array.isArray(r) ? r[0] : r, n)) || "";
}
function setTime(e, t) {
  var r = t.hour,
    n = void 0 === r ? 0 : r,
    a = t.minute,
    o = void 0 === a ? 0 : a,
    s = t.second;
  return setHours(setMinutes(setSeconds(e, void 0 === s ? 0 : s), o), n);
}
function getWeek(e) {
  return isSameYear(endOfWeek(e), e)
    ? differenceInCalendarWeeks(e, startOfYear(e)) + 1
    : 1;
}
function getDayOfWeekCode(e, t) {
  return formatDate(e, "ddd", t);
}
function getStartOfDay(e) {
  return startOfDay(e);
}
function getStartOfWeek(e, t) {
  var r = getLocaleObject(t || getDefaultLocale());
  return startOfWeek(e, { locale: r });
}
function getStartOfMonth(e) {
  return startOfMonth(e);
}
function getStartOfQuarter(e) {
  return startOfQuarter(e);
}
function getStartOfToday() {
  return startOfDay(newDate());
}
function isSameYear(e, t) {
  return e && t ? dfIsSameYear(e, t) : !e && !t;
}
function isSameMonth(e, t) {
  return e && t ? dfIsSameMonth(e, t) : !e && !t;
}
function isSameQuarter(e, t) {
  return e && t ? dfIsSameQuarter(e, t) : !e && !t;
}
function isSameDay(e, t) {
  return e && t ? dfIsSameDay(e, t) : !e && !t;
}
function isEqual(e, t) {
  return e && t ? dfIsEqual(e, t) : !e && !t;
}
function isDayInRange(e, t, r) {
  var n,
    a = startOfDay(t),
    o = endOfDay(r);
  try {
    n = isWithinInterval(e, { start: a, end: o });
  } catch (e) {
    n = !1;
  }
  return n;
}
function registerLocale(e, t) {
  var r = "undefined" != typeof window ? window : global;
  r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
}
function setDefaultLocale(e) {
  ("undefined" != typeof window ? window : global).__localeId__ = e;
}
function getDefaultLocale() {
  return ("undefined" != typeof window ? window : global).__localeId__;
}
function getLocaleObject(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : global;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function getFormattedWeekdayInLocale(e, t, r) {
  return t(formatDate(e, "EEEE", r));
}
function getWeekdayMinInLocale(e, t) {
  return formatDate(e, "EEEEEE", t);
}
function getWeekdayShortInLocale(e, t) {
  return formatDate(e, "EEE", t);
}
function getMonthInLocale(e, t) {
  return formatDate(utils$2(newDate(), e), "LLLL", t);
}
function getMonthShortInLocale(e, t) {
  return formatDate(utils$2(newDate(), e), "LLL", t);
}
function getQuarterShortInLocale(e, t) {
  return formatDate(utils$3(newDate(), e), "QQQ", t);
}
function isDayDisabled(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    isOutOfBounds(e, { minDate: r, maxDate: n }) ||
    (a &&
      a.some(function(t) {
        return isSameDay(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return isSameDay(e, t);
      })) ||
    (s && !s(newDate(e))) ||
    !1
  );
}
function isDayExcluded(e) {
  var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
    .excludeDates;
  return (
    (t &&
      t.some(function(t) {
        return isSameDay(e, t);
      })) ||
    !1
  );
}
function isMonthDisabled(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    isOutOfBounds(e, { minDate: r, maxDate: n }) ||
    (a &&
      a.some(function(t) {
        return isSameMonth(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return isSameMonth(e, t);
      })) ||
    (s && !s(newDate(e))) ||
    !1
  );
}
function isMonthinRange(e, t, r, n) {
  var a = getYear(e),
    o = getMonth(e),
    s = getYear(t),
    i = getMonth(t),
    p = getYear(n);
  return a === s && a === p
    ? o <= r && r <= i
    : a < s
    ? (p === a && o <= r) || (p === s && i >= r) || (p < s && p > a)
    : void 0;
}
function isQuarterDisabled(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    a = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    isOutOfBounds(e, { minDate: r, maxDate: n }) ||
    (a &&
      a.some(function(t) {
        return isSameQuarter(e, t);
      })) ||
    (o &&
      !o.some(function(t) {
        return isSameQuarter(e, t);
      })) ||
    (s && !s(newDate(e))) ||
    !1
  );
}
function isQuarterInRange(e, t, r, n) {
  var a = getYear(e),
    o = getQuarter(e),
    s = getYear(t),
    i = getQuarter(t),
    p = getYear(n);
  return a === s && a === p
    ? o <= r && r <= i
    : a < s
    ? (p === a && o <= r) || (p === s && i >= r) || (p < s && p > a)
    : void 0;
}
function isOutOfBounds(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate;
  return (
    (r && differenceInCalendarDays(e, r) < 0) ||
    (n && differenceInCalendarDays(e, n) > 0)
  );
}
function isTimeDisabled(e, t) {
  for (var r = t.length, n = 0; n < r; n++)
    if (getHours(t[n]) === getHours(e) && getMinutes(t[n]) === getMinutes(e))
      return !0;
  return !1;
}
function isTimeInDisabledRange(e, t) {
  var r = t.minTime,
    n = t.maxTime;
  if (!r || !n) throw new Error("Both minTime and maxTime props required");
  var a,
    o = newDate(),
    s = setHours(setMinutes(o, getMinutes(e)), getHours(e)),
    i = setHours(setMinutes(o, getMinutes(r)), getHours(r)),
    p = setHours(setMinutes(o, getMinutes(n)), getHours(n));
  try {
    a = !isWithinInterval(s, { start: i, end: p });
  } catch (e) {
    a = !1;
  }
  return a;
}
function monthDisabledBefore(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    a = subMonths(e, 1);
  return (
    (r && differenceInCalendarMonths(r, a) > 0) ||
    (n &&
      n.every(function(e) {
        return differenceInCalendarMonths(e, a) > 0;
      })) ||
    !1
  );
}
function monthDisabledAfter(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    a = addMonths(e, 1);
  return (
    (r && differenceInCalendarMonths(a, r) > 0) ||
    (n &&
      n.every(function(e) {
        return differenceInCalendarMonths(a, e) > 0;
      })) ||
    !1
  );
}
function yearDisabledBefore(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    a = subYears(e, 1);
  return (
    (r && differenceInCalendarYears(r, a) > 0) ||
    (n &&
      n.every(function(e) {
        return differenceInCalendarYears(e, a) > 0;
      })) ||
    !1
  );
}
function yearDisabledAfter(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    a = addYears(e, 1);
  return (
    (r && differenceInCalendarYears(a, r) > 0) ||
    (n &&
      n.every(function(e) {
        return differenceInCalendarYears(a, e) > 0;
      })) ||
    !1
  );
}
function getEffectiveMinDate(e) {
  var t = e.minDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function(e) {
      return differenceInCalendarDays(e, t) >= 0;
    });
    return min(n);
  }
  return r ? min(r) : t;
}
function getEffectiveMaxDate(e) {
  var t = e.maxDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function(e) {
      return differenceInCalendarDays(e, t) <= 0;
    });
    return max(n);
  }
  return r ? max(r) : t;
}
function getHightLightDaysMap() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "react-datepicker__day--highlighted",
      r = new Map(),
      n = 0,
      a = e.length;
    n < a;
    n++
  ) {
    var o = e[n];
    if (isDate(o)) {
      var s = formatDate(o, "MM.dd.yyyy"),
        i = r.get(s) || [];
      i.includes(t) || (i.push(t), r.set(s, i));
    } else if ("object" === _typeof(o)) {
      var p = Object.keys(o),
        c = p[0],
        l = o[p[0]];
      if ("string" == typeof c && l.constructor === Array)
        for (var d = 0, u = l.length; d < u; d++) {
          var h = formatDate(l[d], "MM.dd.yyyy"),
            f = r.get(h) || [];
          f.includes(c) || (f.push(c), r.set(h, f));
        }
    }
  }
  return r;
}
function timesToInjectAfter(e, t, r, n, a) {
  for (var o = a.length, s = [], i = 0; i < o; i++) {
    var p = addMinutes(addHours(e, getHours(a[i])), getMinutes(a[i])),
      c = addMinutes(e, (r + 1) * n);
    isAfter(p, t) && isBefore(p, c) && s.push(a[i]);
  }
  return s;
}
function addZero(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function generateYears(e, t, r, n) {
  for (var a = [], o = 0; o < 2 * t + 1; o++) {
    var s = e + t - o,
      i = !0;
    r && (i = getYear(r) <= s), n && i && (i = getYear(n) >= s), i && a.push(s);
  }
  return a;
}
var YearDropdownOptions = (function(e) {
    function t(e) {
      var r;
      _classCallCheck(this, t),
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              _getPrototypeOf(t).call(this, e)
            ))
          ),
          "renderOptions",
          function() {
            var e = r.props.year,
              t = r.state.yearsList.map(function(t) {
                return React.createElement(
                  "div",
                  {
                    className:
                      e === t
                        ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                        : "react-datepicker__year-option",
                    key: t,
                    ref: t,
                    onClick: r.onChange.bind(_assertThisInitialized(r), t)
                  },
                  e === t
                    ? React.createElement(
                        "span",
                        {
                          className: "react-datepicker__year-option--selected"
                        },
                        "✓"
                      )
                    : "",
                  t
                );
              }),
              n = r.props.minDate ? getYear(r.props.minDate) : null,
              a = r.props.maxDate ? getYear(r.props.maxDate) : null;
            return (
              (a &&
                r.state.yearsList.find(function(e) {
                  return e === a;
                })) ||
                t.unshift(
                  React.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      ref: "upcoming",
                      key: "upcoming",
                      onClick: r.incrementYears
                    },
                    React.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming"
                    })
                  )
                ),
              (n &&
                r.state.yearsList.find(function(e) {
                  return e === n;
                })) ||
                t.push(
                  React.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      ref: "previous",
                      key: "previous",
                      onClick: r.decrementYears
                    },
                    React.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous"
                    })
                  )
                ),
              t
            );
          }
        ),
        _defineProperty(_assertThisInitialized(r), "onChange", function(e) {
          r.props.onChange(e);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "handleClickOutside",
          function() {
            r.props.onCancel();
          }
        ),
        _defineProperty(_assertThisInitialized(r), "shiftYears", function(e) {
          var t = r.state.yearsList.map(function(t) {
            return t + e;
          });
          r.setState({ yearsList: t });
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "incrementYears",
          function() {
            return r.shiftYears(1);
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "decrementYears",
          function() {
            return r.shiftYears(-1);
          }
        );
      var n = e.yearDropdownItemNumber,
        a = e.scrollableYearDropdown,
        o = n || (a ? 10 : 5);
      return (
        (r.state = {
          yearsList: generateYears(
            r.props.year,
            o,
            r.props.minDate,
            r.props.maxDate
          )
        }),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(t, [
        {
          key: "render",
          value: function() {
            var e = classnames({
              "react-datepicker__year-dropdown": !0,
              "react-datepicker__year-dropdown--scrollable": this.props
                .scrollableYearDropdown
            });
            return React.createElement(
              "div",
              { className: e },
              this.renderOptions()
            );
          }
        }
      ]),
      t
    );
  })(),
  WrappedYearDropdownOptions = onClickOutside(YearDropdownOptions),
  YearDropdown = (function(e) {
    function t() {
      var e, r;
      _classCallCheck(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      return (
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              (e = _getPrototypeOf(t)).call.apply(e, [this].concat(a))
            ))
          ),
          "state",
          { dropdownVisible: !1 }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderSelectOptions",
          function() {
            for (
              var e = r.props.minDate ? getYear(r.props.minDate) : 1900,
                t = r.props.maxDate ? getYear(r.props.maxDate) : 2100,
                n = [],
                a = e;
              a <= t;
              a++
            )
              n.push(React.createElement("option", { key: a, value: a }, a));
            return n;
          }
        ),
        _defineProperty(_assertThisInitialized(r), "onSelectChange", function(
          e
        ) {
          r.onChange(e.target.value);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "renderSelectMode",
          function() {
            return React.createElement(
              "select",
              {
                value: r.props.year,
                className: "react-datepicker__year-select",
                onChange: r.onSelectChange
              },
              r.renderSelectOptions()
            );
          }
        ),
        _defineProperty(_assertThisInitialized(r), "renderReadView", function(
          e
        ) {
          return React.createElement(
            "div",
            {
              key: "read",
              style: { visibility: e ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function(e) {
                return r.toggleDropdown(e);
              }
            },
            React.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow"
            }),
            React.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              r.props.year
            )
          );
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "renderDropdown",
          function() {
            return React.createElement(WrappedYearDropdownOptions, {
              key: "dropdown",
              ref: "options",
              year: r.props.year,
              onChange: r.onChange,
              onCancel: r.toggleDropdown,
              minDate: r.props.minDate,
              maxDate: r.props.maxDate,
              scrollableYearDropdown: r.props.scrollableYearDropdown,
              yearDropdownItemNumber: r.props.yearDropdownItemNumber
            });
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderScrollMode",
          function() {
            var e = r.state.dropdownVisible,
              t = [r.renderReadView(!e)];
            return e && t.unshift(r.renderDropdown()), t;
          }
        ),
        _defineProperty(_assertThisInitialized(r), "onChange", function(e) {
          r.toggleDropdown(), e !== r.props.year && r.props.onChange(e);
        }),
        _defineProperty(_assertThisInitialized(r), "toggleDropdown", function(
          e
        ) {
          r.setState({ dropdownVisible: !r.state.dropdownVisible }, function() {
            r.props.adjustDateOnChange && r.handleYearChange(r.props.date, e);
          });
        }),
        _defineProperty(_assertThisInitialized(r), "handleYearChange", function(
          e,
          t
        ) {
          r.onSelect(e, t), r.setOpen();
        }),
        _defineProperty(_assertThisInitialized(r), "onSelect", function(e, t) {
          r.props.onSelect && r.props.onSelect(e, t);
        }),
        _defineProperty(_assertThisInitialized(r), "setOpen", function() {
          r.props.setOpen && r.props.setOpen(!0);
        }),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(t, [
        {
          key: "render",
          value: function() {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return React.createElement(
              "div",
              {
                className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      t
    );
  })(),
  MonthDropdownOptions = (function(e) {
    function t() {
      var e, r;
      _classCallCheck(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      return (
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              (e = _getPrototypeOf(t)).call.apply(e, [this].concat(a))
            ))
          ),
          "renderOptions",
          function() {
            return r.props.monthNames.map(function(e, t) {
              return React.createElement(
                "div",
                {
                  className:
                    r.props.month === t
                      ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                      : "react-datepicker__month-option",
                  key: e,
                  ref: e,
                  onClick: r.onChange.bind(_assertThisInitialized(r), t)
                },
                r.props.month === t
                  ? React.createElement(
                      "span",
                      { className: "react-datepicker__month-option--selected" },
                      "✓"
                    )
                  : "",
                e
              );
            });
          }
        ),
        _defineProperty(_assertThisInitialized(r), "onChange", function(e) {
          return r.props.onChange(e);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "handleClickOutside",
          function() {
            return r.props.onCancel();
          }
        ),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(t, [
        {
          key: "render",
          value: function() {
            return React.createElement(
              "div",
              { className: "react-datepicker__month-dropdown" },
              this.renderOptions()
            );
          }
        }
      ]),
      t
    );
  })(),
  WrappedMonthDropdownOptions = onClickOutside(MonthDropdownOptions),
  MonthDropdown = (function(e) {
    function t() {
      var e, r;
      _classCallCheck(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      return (
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              (e = _getPrototypeOf(t)).call.apply(e, [this].concat(a))
            ))
          ),
          "state",
          { dropdownVisible: !1 }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderSelectOptions",
          function(e) {
            return e.map(function(e, t) {
              return React.createElement("option", { key: t, value: t }, e);
            });
          }
        ),
        _defineProperty(_assertThisInitialized(r), "renderSelectMode", function(
          e
        ) {
          return React.createElement(
            "select",
            {
              value: r.props.month,
              className: "react-datepicker__month-select",
              onChange: function(e) {
                return r.onChange(e.target.value);
              }
            },
            r.renderSelectOptions(e)
          );
        }),
        _defineProperty(_assertThisInitialized(r), "renderReadView", function(
          e,
          t
        ) {
          return React.createElement(
            "div",
            {
              key: "read",
              style: { visibility: e ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: r.toggleDropdown
            },
            React.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow"
            }),
            React.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month"
              },
              t[r.props.month]
            )
          );
        }),
        _defineProperty(_assertThisInitialized(r), "renderDropdown", function(
          e
        ) {
          return React.createElement(WrappedMonthDropdownOptions, {
            key: "dropdown",
            ref: "options",
            month: r.props.month,
            monthNames: e,
            onChange: r.onChange,
            onCancel: r.toggleDropdown
          });
        }),
        _defineProperty(_assertThisInitialized(r), "renderScrollMode", function(
          e
        ) {
          var t = r.state.dropdownVisible,
            n = [r.renderReadView(!t, e)];
          return t && n.unshift(r.renderDropdown(e)), n;
        }),
        _defineProperty(_assertThisInitialized(r), "onChange", function(e) {
          r.toggleDropdown(), e !== r.props.month && r.props.onChange(e);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "toggleDropdown",
          function() {
            return r.setState({ dropdownVisible: !r.state.dropdownVisible });
          }
        ),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(t, [
        {
          key: "render",
          value: function() {
            var e,
              t = this,
              r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function(e) {
                      return getMonthShortInLocale(e, t.props.locale);
                    }
                  : function(e) {
                      return getMonthInLocale(e, t.props.locale);
                    }
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode(r);
                break;
              case "select":
                e = this.renderSelectMode(r);
            }
            return React.createElement(
              "div",
              {
                className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      t
    );
  })();
function generateMonthYears(e, t) {
  for (
    var r = [], n = getStartOfMonth(e), a = getStartOfMonth(t);
    !isAfter(n, a);

  )
    r.push(newDate(n)), (n = addMonths(n, 1));
  return r;
}
var MonthYearDropdownOptions = (function(e) {
    function t(e) {
      var r;
      return (
        _classCallCheck(this, t),
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              _getPrototypeOf(t).call(this, e)
            ))
          ),
          "renderOptions",
          function() {
            return r.state.monthYearsList.map(function(e) {
              var t = getTime(e),
                n = isSameYear(r.props.date, e) && isSameMonth(r.props.date, e);
              return React.createElement(
                "div",
                {
                  className: n
                    ? "react-datepicker__month-year-option --selected_month-year"
                    : "react-datepicker__month-year-option",
                  key: t,
                  ref: t,
                  onClick: r.onChange.bind(_assertThisInitialized(r), t)
                },
                n
                  ? React.createElement(
                      "span",
                      {
                        className:
                          "react-datepicker__month-year-option--selected"
                      },
                      "✓"
                    )
                  : "",
                formatDate(e, r.props.dateFormat)
              );
            });
          }
        ),
        _defineProperty(_assertThisInitialized(r), "onChange", function(e) {
          return r.props.onChange(e);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "handleClickOutside",
          function() {
            r.props.onCancel();
          }
        ),
        (r.state = {
          monthYearsList: generateMonthYears(r.props.minDate, r.props.maxDate)
        }),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(t, [
        {
          key: "render",
          value: function() {
            var e = classnames({
              "react-datepicker__month-year-dropdown": !0,
              "react-datepicker__month-year-dropdown--scrollable": this.props
                .scrollableMonthYearDropdown
            });
            return React.createElement(
              "div",
              { className: e },
              this.renderOptions()
            );
          }
        }
      ]),
      t
    );
  })(),
  WrappedMonthYearDropdownOptions = onClickOutside(MonthYearDropdownOptions),
  MonthYearDropdown = (function(e) {
    function t() {
      var e, r;
      _classCallCheck(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      return (
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              (e = _getPrototypeOf(t)).call.apply(e, [this].concat(a))
            ))
          ),
          "state",
          { dropdownVisible: !1 }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderSelectOptions",
          function() {
            for (
              var e = getStartOfMonth(r.props.minDate),
                t = getStartOfMonth(r.props.maxDate),
                n = [];
              !isAfter(e, t);

            ) {
              var a = getTime(e);
              n.push(
                React.createElement(
                  "option",
                  { key: a, value: a },
                  formatDate(e, r.props.dateFormat, r.props.locale)
                )
              ),
                (e = addMonths(e, 1));
            }
            return n;
          }
        ),
        _defineProperty(_assertThisInitialized(r), "onSelectChange", function(
          e
        ) {
          r.onChange(e.target.value);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "renderSelectMode",
          function() {
            return React.createElement(
              "select",
              {
                value: getTime(getStartOfMonth(r.props.date)),
                className: "react-datepicker__month-year-select",
                onChange: r.onSelectChange
              },
              r.renderSelectOptions()
            );
          }
        ),
        _defineProperty(_assertThisInitialized(r), "renderReadView", function(
          e
        ) {
          var t = formatDate(r.props.date, r.props.dateFormat, r.props.locale);
          return React.createElement(
            "div",
            {
              key: "read",
              style: { visibility: e ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: function(e) {
                return r.toggleDropdown(e);
              }
            },
            React.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow"
            }),
            React.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year"
              },
              t
            )
          );
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "renderDropdown",
          function() {
            return React.createElement(WrappedMonthYearDropdownOptions, {
              key: "dropdown",
              ref: "options",
              date: r.props.date,
              dateFormat: r.props.dateFormat,
              onChange: r.onChange,
              onCancel: r.toggleDropdown,
              minDate: r.props.minDate,
              maxDate: r.props.maxDate,
              scrollableMonthYearDropdown: r.props.scrollableMonthYearDropdown
            });
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderScrollMode",
          function() {
            var e = r.state.dropdownVisible,
              t = [r.renderReadView(!e)];
            return e && t.unshift(r.renderDropdown()), t;
          }
        ),
        _defineProperty(_assertThisInitialized(r), "onChange", function(e) {
          r.toggleDropdown();
          var t = newDate(parseInt(e));
          (isSameYear(r.props.date, t) && isSameMonth(r.props.date, t)) ||
            r.props.onChange(t);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "toggleDropdown",
          function() {
            return r.setState({ dropdownVisible: !r.state.dropdownVisible });
          }
        ),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(t, [
        {
          key: "render",
          value: function() {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return React.createElement(
              "div",
              {
                className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                  this.props.dropdownMode
                )
              },
              e
            );
          }
        }
      ]),
      t
    );
  })(),
  Day = (function(e) {
    function t() {
      var e, r;
      _classCallCheck(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      return (
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              (e = _getPrototypeOf(t)).call.apply(e, [this].concat(a))
            ))
          ),
          "handleClick",
          function(e) {
            !r.isDisabled() && r.props.onClick && r.props.onClick(e);
          }
        ),
        _defineProperty(_assertThisInitialized(r), "handleMouseEnter", function(
          e
        ) {
          !r.isDisabled() && r.props.onMouseEnter && r.props.onMouseEnter(e);
        }),
        _defineProperty(_assertThisInitialized(r), "isSameDay", function(e) {
          return isSameDay(r.props.day, e);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "isKeyboardSelected",
          function() {
            return (
              !r.props.disabledKeyboardNavigation &&
              !r.props.inline &&
              !r.isSameDay(r.props.selected) &&
              r.isSameDay(r.props.preSelection)
            );
          }
        ),
        _defineProperty(_assertThisInitialized(r), "isDisabled", function() {
          return isDayDisabled(r.props.day, r.props);
        }),
        _defineProperty(_assertThisInitialized(r), "isExcluded", function() {
          return isDayExcluded(r.props.day, r.props);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "getHighLightedClass",
          function(e) {
            var t = r.props,
              n = t.day,
              a = t.highlightDates;
            if (!a) return !1;
            var o = formatDate(n, "MM.dd.yyyy");
            return a.get(o);
          }
        ),
        _defineProperty(_assertThisInitialized(r), "isInRange", function() {
          var e = r.props,
            t = e.day,
            n = e.startDate,
            a = e.endDate;
          return !(!n || !a) && isDayInRange(t, n, a);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "isInSelectingRange",
          function() {
            var e = r.props,
              t = e.day,
              n = e.selectsStart,
              a = e.selectsEnd,
              o = e.selectingDate,
              s = e.startDate,
              i = e.endDate;
            return (
              !((!n && !a) || !o || r.isDisabled()) &&
              (n && i && (isBefore(o, i) || isEqual(o, i))
                ? isDayInRange(t, o, i)
                : !(!a || !s || (!isAfter(o, s) && !isEqual(o, s))) &&
                  isDayInRange(t, s, o))
            );
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "isSelectingRangeStart",
          function() {
            if (!r.isInSelectingRange()) return !1;
            var e = r.props,
              t = e.day,
              n = e.selectingDate,
              a = e.startDate;
            return isSameDay(t, e.selectsStart ? n : a);
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "isSelectingRangeEnd",
          function() {
            if (!r.isInSelectingRange()) return !1;
            var e = r.props,
              t = e.day,
              n = e.selectingDate,
              a = e.endDate;
            return isSameDay(t, e.selectsEnd ? n : a);
          }
        ),
        _defineProperty(_assertThisInitialized(r), "isRangeStart", function() {
          var e = r.props,
            t = e.day,
            n = e.startDate,
            a = e.endDate;
          return !(!n || !a) && isSameDay(n, t);
        }),
        _defineProperty(_assertThisInitialized(r), "isRangeEnd", function() {
          var e = r.props,
            t = e.day,
            n = e.startDate,
            a = e.endDate;
          return !(!n || !a) && isSameDay(a, t);
        }),
        _defineProperty(_assertThisInitialized(r), "isWeekend", function() {
          var e = getDay(r.props.day);
          return 0 === e || 6 === e;
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "isOutsideMonth",
          function() {
            return (
              void 0 !== r.props.month &&
              r.props.month !== getMonth(r.props.day)
            );
          }
        ),
        _defineProperty(_assertThisInitialized(r), "getClassNames", function(
          e
        ) {
          var t = r.props.dayClassName ? r.props.dayClassName(e) : void 0;
          return classnames(
            "react-datepicker__day",
            t,
            "react-datepicker__day--" + getDayOfWeekCode(r.props.day),
            {
              "react-datepicker__day--disabled": r.isDisabled(),
              "react-datepicker__day--excluded": r.isExcluded(),
              "react-datepicker__day--selected": r.isSameDay(r.props.selected),
              "react-datepicker__day--keyboard-selected": r.isKeyboardSelected(),
              "react-datepicker__day--range-start": r.isRangeStart(),
              "react-datepicker__day--range-end": r.isRangeEnd(),
              "react-datepicker__day--in-range": r.isInRange(),
              "react-datepicker__day--in-selecting-range": r.isInSelectingRange(),
              "react-datepicker__day--selecting-range-start": r.isSelectingRangeStart(),
              "react-datepicker__day--selecting-range-end": r.isSelectingRangeEnd(),
              "react-datepicker__day--today": r.isSameDay(newDate()),
              "react-datepicker__day--weekend": r.isWeekend(),
              "react-datepicker__day--outside-month": r.isOutsideMonth()
            },
            r.getHighLightedClass("react-datepicker__day--highlighted")
          );
        }),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(t, [
        {
          key: "render",
          value: function() {
            return React.createElement(
              "div",
              {
                className: this.getClassNames(this.props.day),
                onClick: this.handleClick,
                onMouseEnter: this.handleMouseEnter,
                "aria-label": "day-".concat(getDate(this.props.day)),
                role: "option",
                "aria-disabled": this.isDisabled()
              },
              this.props.renderDayContents
                ? this.props.renderDayContents(
                    getDate(this.props.day),
                    this.props.day
                  )
                : getDate(this.props.day)
            );
          }
        }
      ]),
      t
    );
  })(),
  WeekNumber = (function(e) {
    function t() {
      var e, r;
      _classCallCheck(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      return (
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              (e = _getPrototypeOf(t)).call.apply(e, [this].concat(a))
            ))
          ),
          "handleClick",
          function(e) {
            r.props.onClick && r.props.onClick(e);
          }
        ),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(t, [
        {
          key: "render",
          value: function() {
            var e = {
              "react-datepicker__week-number": !0,
              "react-datepicker__week-number--clickable": !!this.props.onClick
            };
            return React.createElement(
              "div",
              {
                className: classnames(e),
                "aria-label": "week-".concat(this.props.weekNumber),
                onClick: this.handleClick
              },
              this.props.weekNumber
            );
          }
        }
      ]),
      t
    );
  })(),
  Week = (function(e) {
    function t() {
      var e, r;
      _classCallCheck(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      return (
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              (e = _getPrototypeOf(t)).call.apply(e, [this].concat(a))
            ))
          ),
          "handleDayClick",
          function(e, t) {
            r.props.onDayClick && r.props.onDayClick(e, t);
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "handleDayMouseEnter",
          function(e) {
            r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
          }
        ),
        _defineProperty(_assertThisInitialized(r), "handleWeekClick", function(
          e,
          t,
          n
        ) {
          "function" == typeof r.props.onWeekSelect &&
            r.props.onWeekSelect(e, t, n),
            r.props.shouldCloseOnSelect && r.props.setOpen(!1);
        }),
        _defineProperty(_assertThisInitialized(r), "formatWeekNumber", function(
          e
        ) {
          return r.props.formatWeekNumber
            ? r.props.formatWeekNumber(e)
            : getWeek(e);
        }),
        _defineProperty(_assertThisInitialized(r), "renderDays", function() {
          var e = getStartOfWeek(r.props.day, r.props.locale),
            t = [],
            n = r.formatWeekNumber(e);
          if (r.props.showWeekNumber) {
            var a = r.props.onWeekSelect
              ? r.handleWeekClick.bind(_assertThisInitialized(r), e, n)
              : void 0;
            t.push(
              React.createElement(WeekNumber, {
                key: "W",
                weekNumber: n,
                onClick: a
              })
            );
          }
          return t.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function(t) {
              var n = utils(e, t);
              return React.createElement(Day, {
                key: t,
                day: n,
                month: r.props.month,
                onClick: r.handleDayClick.bind(_assertThisInitialized(r), n),
                onMouseEnter: r.handleDayMouseEnter.bind(
                  _assertThisInitialized(r),
                  n
                ),
                minDate: r.props.minDate,
                maxDate: r.props.maxDate,
                excludeDates: r.props.excludeDates,
                includeDates: r.props.includeDates,
                inline: r.props.inline,
                highlightDates: r.props.highlightDates,
                selectingDate: r.props.selectingDate,
                filterDate: r.props.filterDate,
                preSelection: r.props.preSelection,
                selected: r.props.selected,
                selectsStart: r.props.selectsStart,
                selectsEnd: r.props.selectsEnd,
                startDate: r.props.startDate,
                endDate: r.props.endDate,
                dayClassName: r.props.dayClassName,
                renderDayContents: r.props.renderDayContents,
                disabledKeyboardNavigation: r.props.disabledKeyboardNavigation
              });
            })
          );
        }),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(
        t,
        [
          {
            key: "render",
            value: function() {
              return React.createElement(
                "div",
                { className: "react-datepicker__week" },
                this.renderDays()
              );
            }
          }
        ],
        [
          {
            key: "defaultProps",
            get: function() {
              return { shouldCloseOnSelect: !0 };
            }
          }
        ]
      ),
      t
    );
  })(),
  FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6,
  Month = (function(e) {
    function t() {
      var e, r;
      _classCallCheck(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      return (
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              (e = _getPrototypeOf(t)).call.apply(e, [this].concat(a))
            ))
          ),
          "handleDayClick",
          function(e, t) {
            r.props.onDayClick &&
              r.props.onDayClick(e, t, r.props.orderInDisplay);
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "handleDayMouseEnter",
          function(e) {
            r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "handleMouseLeave",
          function() {
            r.props.onMouseLeave && r.props.onMouseLeave();
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "isRangeStartMonth",
          function(e) {
            var t = r.props,
              n = t.day,
              a = t.startDate,
              o = t.endDate;
            return !(!a || !o) && isSameMonth(utils$2(n, e), a);
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "isRangeStartQuarter",
          function(e) {
            var t = r.props,
              n = t.day,
              a = t.startDate,
              o = t.endDate;
            return !(!a || !o) && isSameQuarter(utils$3(n, e), a);
          }
        ),
        _defineProperty(_assertThisInitialized(r), "isRangeEndMonth", function(
          e
        ) {
          var t = r.props,
            n = t.day,
            a = t.startDate,
            o = t.endDate;
          return !(!a || !o) && isSameMonth(utils$2(n, e), o);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "isRangeEndQuarter",
          function(e) {
            var t = r.props,
              n = t.day,
              a = t.startDate,
              o = t.endDate;
            return !(!a || !o) && isSameQuarter(utils$3(n, e), o);
          }
        ),
        _defineProperty(_assertThisInitialized(r), "isWeekInMonth", function(
          e
        ) {
          var t = r.props.day,
            n = utils(e, 6);
          return isSameMonth(e, t) || isSameMonth(n, t);
        }),
        _defineProperty(_assertThisInitialized(r), "renderWeeks", function() {
          for (
            var e = [],
              t = r.props.fixedHeight,
              n = getStartOfWeek(getStartOfMonth(r.props.day), r.props.locale),
              a = 0,
              o = !1;
            e.push(
              React.createElement(Week, {
                key: a,
                day: n,
                month: getMonth(r.props.day),
                onDayClick: r.handleDayClick,
                onDayMouseEnter: r.handleDayMouseEnter,
                onWeekSelect: r.props.onWeekSelect,
                formatWeekNumber: r.props.formatWeekNumber,
                locale: r.props.locale,
                minDate: r.props.minDate,
                maxDate: r.props.maxDate,
                excludeDates: r.props.excludeDates,
                includeDates: r.props.includeDates,
                inline: r.props.inline,
                highlightDates: r.props.highlightDates,
                selectingDate: r.props.selectingDate,
                filterDate: r.props.filterDate,
                preSelection: r.props.preSelection,
                selected: r.props.selected,
                selectsStart: r.props.selectsStart,
                selectsEnd: r.props.selectsEnd,
                showWeekNumber: r.props.showWeekNumbers,
                startDate: r.props.startDate,
                endDate: r.props.endDate,
                dayClassName: r.props.dayClassName,
                setOpen: r.props.setOpen,
                shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                disabledKeyboardNavigation: r.props.disabledKeyboardNavigation,
                renderDayContents: r.props.renderDayContents
              })
            ),
              !o;

          ) {
            a++, (n = utils$1(n, 1));
            var s = t && a >= FIXED_HEIGHT_STANDARD_WEEK_COUNT,
              i = !t && !r.isWeekInMonth(n);
            if (s || i) {
              if (!r.props.peekNextMonth) break;
              o = !0;
            }
          }
          return e;
        }),
        _defineProperty(_assertThisInitialized(r), "onMonthClick", function(
          e,
          t
        ) {
          r.handleDayClick(getStartOfMonth(utils$2(r.props.day, t)), e);
        }),
        _defineProperty(_assertThisInitialized(r), "onQuarterClick", function(
          e,
          t
        ) {
          r.handleDayClick(getStartOfQuarter(utils$3(r.props.day, t)), e);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "getMonthClassNames",
          function(e) {
            var t = r.props,
              n = t.day,
              a = t.startDate,
              o = t.endDate,
              s = t.selected,
              i = t.minDate,
              p = t.maxDate;
            return classnames(
              "react-datepicker__month-text",
              "react-datepicker__month-".concat(e),
              {
                "react-datepicker__month--disabled":
                  (i || p) && isMonthDisabled(utils$2(n, e), r.props),
                "react-datepicker__month--selected":
                  getMonth(n) === e && getYear(n) === getYear(s),
                "react-datepicker__month--in-range": isMonthinRange(a, o, e, n),
                "react-datepicker__month--range-start": r.isRangeStartMonth(e),
                "react-datepicker__month--range-end": r.isRangeEndMonth(e)
              }
            );
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "getQuarterClassNames",
          function(e) {
            var t = r.props,
              n = t.day,
              a = t.startDate,
              o = t.endDate,
              s = t.selected,
              i = t.minDate,
              p = t.maxDate;
            return classnames(
              "react-datepicker__quarter-text",
              "react-datepicker__quarter-".concat(e),
              {
                "react-datepicker__quarter--disabled":
                  (i || p) && isQuarterDisabled(utils$3(n, e), r.props),
                "react-datepicker__quarter--selected":
                  getQuarter(n) === e && getYear(n) === getYear(s),
                "react-datepicker__quarter--in-range": isQuarterInRange(
                  a,
                  o,
                  e,
                  n
                ),
                "react-datepicker__quarter--range-start": r.isRangeStartQuarter(
                  e
                ),
                "react-datepicker__quarter--range-end": r.isRangeEndQuarter(e)
              }
            );
          }
        ),
        _defineProperty(_assertThisInitialized(r), "renderMonths", function() {
          return [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [9, 10, 11]
          ].map(function(e, t) {
            return React.createElement(
              "div",
              { className: "react-datepicker__month-wrapper", key: t },
              e.map(function(e, t) {
                return React.createElement(
                  "div",
                  {
                    key: t,
                    onClick: function(t) {
                      r.onMonthClick(t, e);
                    },
                    className: r.getMonthClassNames(e)
                  },
                  getMonthShortInLocale(e, r.props.locale)
                );
              })
            );
          });
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "renderQuarters",
          function() {
            return React.createElement(
              "div",
              { className: "react-datepicker__quarter-wrapper" },
              [1, 2, 3, 4].map(function(e, t) {
                return React.createElement(
                  "div",
                  {
                    key: t,
                    onClick: function(t) {
                      r.onQuarterClick(t, e);
                    },
                    className: r.getQuarterClassNames(e)
                  },
                  getQuarterShortInLocale(e, r.props.locale)
                );
              })
            );
          }
        ),
        _defineProperty(_assertThisInitialized(r), "getClassNames", function() {
          var e = r.props,
            t = e.selectingDate,
            n = e.selectsStart,
            a = e.selectsEnd,
            o = e.showMonthYearPicker,
            s = e.showQuarterYearPicker;
          return classnames(
            "react-datepicker__month",
            { "react-datepicker__month--selecting-range": t && (n || a) },
            { "react-datepicker__monthPicker": o },
            { "react-datepicker__quarterPicker": s }
          );
        }),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(t, [
        {
          key: "render",
          value: function() {
            var e = this.props,
              t = e.showMonthYearPicker,
              r = e.showQuarterYearPicker;
            return React.createElement(
              "div",
              {
                className: this.getClassNames(),
                onMouseLeave: this.handleMouseLeave,
                role: "listbox",
                "aria-label": "month-" + formatDate(this.props.day, "yyyy-MM")
              },
              t
                ? this.renderMonths()
                : r
                ? this.renderQuarters()
                : this.renderWeeks()
            );
          }
        }
      ]),
      t
    );
  })(),
  Time = (function(e) {
    function t() {
      var e, r;
      _classCallCheck(this, t);
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      return (
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              (e = _getPrototypeOf(t)).call.apply(e, [this].concat(a))
            ))
          ),
          "state",
          { height: null }
        ),
        _defineProperty(_assertThisInitialized(r), "handleClick", function(e) {
          ((r.props.minTime || r.props.maxTime) &&
            isTimeInDisabledRange(e, r.props)) ||
            (r.props.excludeTimes && isTimeDisabled(e, r.props.excludeTimes)) ||
            (r.props.includeTimes &&
              !isTimeDisabled(e, r.props.includeTimes)) ||
            r.props.onChange(e);
        }),
        _defineProperty(_assertThisInitialized(r), "liClasses", function(
          e,
          t,
          n
        ) {
          var a = ["react-datepicker__time-list-item"];
          return (
            r.props.selected &&
              t === getHours(e) &&
              n === getMinutes(e) &&
              a.push("react-datepicker__time-list-item--selected"),
            (((r.props.minTime || r.props.maxTime) &&
              isTimeInDisabledRange(e, r.props)) ||
              (r.props.excludeTimes &&
                isTimeDisabled(e, r.props.excludeTimes)) ||
              (r.props.includeTimes &&
                !isTimeDisabled(e, r.props.includeTimes))) &&
              a.push("react-datepicker__time-list-item--disabled"),
            r.props.injectTimes &&
              (60 * getHours(e) + getMinutes(e)) % r.props.intervals != 0 &&
              a.push("react-datepicker__time-list-item--injected"),
            a.join(" ")
          );
        }),
        _defineProperty(_assertThisInitialized(r), "renderTimes", function() {
          for (
            var e = [],
              t = r.props.format ? r.props.format : "p",
              n = r.props.intervals,
              a = r.props.selected || r.props.openToDate || newDate(),
              o = getHours(a),
              s = getMinutes(a),
              i = getStartOfDay(newDate()),
              p = 1440 / n,
              c =
                r.props.injectTimes &&
                r.props.injectTimes.sort(function(e, t) {
                  return e - t;
                }),
              l = 0;
            l < p;
            l++
          ) {
            var d = addMinutes(i, l * n);
            if ((e.push(d), c)) {
              var u = timesToInjectAfter(i, d, l, n, c);
              e = e.concat(u);
            }
          }
          return e.map(function(e, n) {
            return React.createElement(
              "li",
              {
                key: n,
                onClick: r.handleClick.bind(_assertThisInitialized(r), e),
                className: r.liClasses(e, o, s),
                ref: function(t) {
                  o === getHours(e) && s >= getMinutes(e) && (r.centerLi = t);
                }
              },
              formatDate(e, t, r.props.locale)
            );
          });
        }),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(
        t,
        [
          {
            key: "componentDidMount",
            value: function() {
              (this.list.scrollTop = t.calcCenterPosition(
                this.props.monthRef
                  ? this.props.monthRef.clientHeight - this.header.clientHeight
                  : this.list.clientHeight,
                this.centerLi
              )),
                this.props.monthRef &&
                  this.header &&
                  this.setState({
                    height:
                      this.props.monthRef.clientHeight -
                      this.header.clientHeight
                  });
            }
          },
          {
            key: "render",
            value: function() {
              var e = this,
                t = this.state.height;
              return React.createElement(
                "div",
                {
                  className: "react-datepicker__time-container ".concat(
                    this.props.todayButton
                      ? "react-datepicker__time-container--with-today-button"
                      : ""
                  )
                },
                React.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header react-datepicker__header--time",
                    ref: function(t) {
                      e.header = t;
                    }
                  },
                  React.createElement(
                    "div",
                    { className: "react-datepicker-time__header" },
                    this.props.timeCaption
                  )
                ),
                React.createElement(
                  "div",
                  { className: "react-datepicker__time" },
                  React.createElement(
                    "div",
                    { className: "react-datepicker__time-box" },
                    React.createElement(
                      "ul",
                      {
                        className: "react-datepicker__time-list",
                        ref: function(t) {
                          e.list = t;
                        },
                        style: t ? { height: t } : {}
                      },
                      this.renderTimes()
                    )
                  )
                )
              );
            }
          }
        ],
        [
          {
            key: "defaultProps",
            get: function() {
              return {
                intervals: 30,
                onTimeChange: function() {},
                todayButton: null,
                timeCaption: "Time"
              };
            }
          }
        ]
      ),
      t
    );
  })();
_defineProperty(Time, "calcCenterPosition", function(e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
});
var inputTime = (function(e) {
  function t(e) {
    var r;
    return (
      _classCallCheck(this, t),
      _defineProperty(
        _assertThisInitialized(
          (r = _possibleConstructorReturn(
            this,
            _getPrototypeOf(t).call(this, e)
          ))
        ),
        "onTimeChange",
        function(e) {
          r.setState({ time: e });
          var t = new Date();
          t.setHours(e.split(":")[0]),
            t.setMinutes(e.split(":")[1]),
            r.props.onChange(t);
        }
      ),
      (r.state = { time: r.props.timeString }),
      r
    );
  }
  return (
    _inherits(t, React.Component),
    _createClass(t, [
      {
        key: "render",
        value: function() {
          var e = this,
            t = this.state.time,
            r = this.props.timeString;
          return React.createElement(
            "div",
            { className: "react-datepicker__input-time-container" },
            React.createElement(
              "div",
              { className: "react-datepicker-time__caption" },
              this.props.timeInputLabel
            ),
            React.createElement(
              "div",
              { className: "react-datepicker-time__input-container" },
              React.createElement(
                "div",
                { className: "react-datepicker-time__input" },
                React.createElement("input", {
                  type: "time",
                  className: "react-datepicker-time__input",
                  placeholder: "Time",
                  name: "time-input",
                  required: !0,
                  value: t,
                  onChange: function(t) {
                    e.onTimeChange(t.target.value || r);
                  }
                })
              )
            )
          );
        }
      }
    ]),
    t
  );
})();
function CalendarContainer(e) {
  var t = e.className,
    r = e.children,
    n = e.showPopperArrow,
    a = e.arrowProps,
    o = void 0 === a ? {} : a;
  return React.createElement(
    "div",
    { className: t },
    n &&
      React.createElement(
        "div",
        _extends({ className: "react-datepicker__triangle" }, o)
      ),
    r
  );
}
var DROPDOWN_FOCUS_CLASSNAMES = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select"
  ],
  isDropdownSelect = function() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = (e.className || "").split(/\s+/);
    return DROPDOWN_FOCUS_CLASSNAMES.some(function(e) {
      return t.indexOf(e) >= 0;
    });
  },
  Calendar = (function(e) {
    function t(e) {
      var r;
      return (
        _classCallCheck(this, t),
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              _getPrototypeOf(t).call(this, e)
            ))
          ),
          "handleClickOutside",
          function(e) {
            r.props.onClickOutside(e);
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "setClickOutsideRef",
          function() {
            return r.containerRef.current;
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "handleDropdownFocus",
          function(e) {
            isDropdownSelect(e.target) && r.props.onDropdownFocus();
          }
        ),
        _defineProperty(_assertThisInitialized(r), "getDateInView", function() {
          var e = r.props,
            t = e.preSelection,
            n = e.selected,
            a = e.openToDate,
            o = getEffectiveMinDate(r.props),
            s = getEffectiveMaxDate(r.props),
            i = newDate(),
            p = a || n || t;
          return p || (o && isBefore(i, o) ? o : s && isAfter(i, s) ? s : i);
        }),
        _defineProperty(_assertThisInitialized(r), "increaseMonth", function() {
          r.setState(
            function(e) {
              var t = e.date;
              return { date: addMonths(t, 1) };
            },
            function() {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        _defineProperty(_assertThisInitialized(r), "decreaseMonth", function() {
          r.setState(
            function(e) {
              var t = e.date;
              return { date: subMonths(t, 1) };
            },
            function() {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        _defineProperty(_assertThisInitialized(r), "handleDayClick", function(
          e,
          t,
          n
        ) {
          r.props.onSelect(e, t, n), r.props.onClickDay(e, t, n);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "handleDayMouseEnter",
          function(e) {
            r.setState({ selectingDate: e }),
              r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "handleMonthMouseLeave",
          function() {
            r.setState({ selectingDate: null }),
              r.props.onMonthMouseLeave && r.props.onMonthMouseLeave();
          }
        ),
        _defineProperty(_assertThisInitialized(r), "handleYearChange", function(
          e
        ) {
          r.props.onYearChange && r.props.onYearChange(e);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "handleMonthChange",
          function(e) {
            r.props.onMonthChange && r.props.onMonthChange(e),
              r.props.adjustDateOnChange &&
                (r.props.onSelect && r.props.onSelect(e),
                r.props.setOpen && r.props.setOpen(!0));
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "handleMonthYearChange",
          function(e) {
            r.handleYearChange(e), r.handleMonthChange(e);
          }
        ),
        _defineProperty(_assertThisInitialized(r), "changeYear", function(e) {
          r.setState(
            function(t) {
              var r = t.date;
              return { date: setYear(r, e) };
            },
            function() {
              return r.handleYearChange(r.state.date);
            }
          );
        }),
        _defineProperty(_assertThisInitialized(r), "changeMonth", function(e) {
          r.setState(
            function(t) {
              var r = t.date;
              return { date: utils$2(r, e) };
            },
            function() {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        _defineProperty(_assertThisInitialized(r), "changeMonthYear", function(
          e
        ) {
          r.setState(
            function(t) {
              var r = t.date;
              return { date: setYear(utils$2(r, getMonth(e)), getYear(e)) };
            },
            function() {
              return r.handleMonthYearChange(r.state.date);
            }
          );
        }),
        _defineProperty(_assertThisInitialized(r), "header", function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.state.date,
            t = getStartOfWeek(e, r.props.locale),
            n = [];
          return (
            r.props.showWeekNumbers &&
              n.push(
                React.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  r.props.weekLabel || "#"
                )
              ),
            n.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function(e) {
                var n = utils(t, e),
                  a = r.formatWeekday(n, r.props.locale);
                return React.createElement(
                  "div",
                  { key: e, className: "react-datepicker__day-name" },
                  a
                );
              })
            )
          );
        }),
        _defineProperty(_assertThisInitialized(r), "formatWeekday", function(
          e,
          t
        ) {
          return r.props.formatWeekDay
            ? getFormattedWeekdayInLocale(e, r.props.formatWeekDay, t)
            : r.props.useWeekdaysShort
            ? getWeekdayShortInLocale(e, t)
            : getWeekdayMinInLocale(e, t);
        }),
        _defineProperty(_assertThisInitialized(r), "decreaseYear", function() {
          r.setState(
            function(e) {
              var t = e.date;
              return { date: subYears(t, 1) };
            },
            function() {
              return r.handleYearChange(r.state.date);
            }
          );
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "renderPreviousButton",
          function() {
            if (!r.props.renderCustomHeader) {
              var e = r.props.showMonthYearPicker
                ? yearDisabledBefore(r.state.date, r.props)
                : monthDisabledBefore(r.state.date, r.props);
              if (
                (r.props.forceShowMonthNavigation ||
                  r.props.showDisabledMonthNavigation ||
                  !e) &&
                !r.props.showTimeSelectOnly
              ) {
                var t = [
                    "react-datepicker__navigation",
                    "react-datepicker__navigation--previous"
                  ],
                  n = r.decreaseMonth;
                return (
                  (r.props.showMonthYearPicker ||
                    r.props.showQuarterYearPicker) &&
                    (n = r.decreaseYear),
                  e &&
                    r.props.showDisabledMonthNavigation &&
                    (t.push("react-datepicker__navigation--previous--disabled"),
                    (n = null)),
                  React.createElement(
                    "button",
                    { type: "button", className: t.join(" "), onClick: n },
                    r.props.showMonthYearPicker || r.props.showQuarterYearPicker
                      ? r.props.previousYearButtonLabel
                      : r.props.previousMonthButtonLabel
                  )
                );
              }
            }
          }
        ),
        _defineProperty(_assertThisInitialized(r), "increaseYear", function() {
          r.setState(
            function(e) {
              var t = e.date;
              return { date: addYears(t, 1) };
            },
            function() {
              return r.handleYearChange(r.state.date);
            }
          );
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "renderNextButton",
          function() {
            if (!r.props.renderCustomHeader) {
              var e = r.props.showMonthYearPicker
                ? yearDisabledAfter(r.state.date, r.props)
                : monthDisabledAfter(r.state.date, r.props);
              if (
                (r.props.forceShowMonthNavigation ||
                  r.props.showDisabledMonthNavigation ||
                  !e) &&
                !r.props.showTimeSelectOnly
              ) {
                var t = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--next"
                ];
                r.props.showTimeSelect &&
                  t.push("react-datepicker__navigation--next--with-time"),
                  r.props.todayButton &&
                    t.push(
                      "react-datepicker__navigation--next--with-today-button"
                    );
                var n = r.increaseMonth;
                return (
                  (r.props.showMonthYearPicker ||
                    r.props.showQuarterYearPicker) &&
                    (n = r.increaseYear),
                  e &&
                    r.props.showDisabledMonthNavigation &&
                    (t.push("react-datepicker__navigation--next--disabled"),
                    (n = null)),
                  React.createElement(
                    "button",
                    { type: "button", className: t.join(" "), onClick: n },
                    r.props.showMonthYearPicker || r.props.showQuarterYearPicker
                      ? r.props.nextYearButtonLabel
                      : r.props.nextMonthButtonLabel
                  )
                );
              }
            }
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderCurrentMonth",
          function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : r.state.date,
              t = ["react-datepicker__current-month"];
            return (
              r.props.showYearDropdown &&
                t.push("react-datepicker__current-month--hasYearDropdown"),
              r.props.showMonthDropdown &&
                t.push("react-datepicker__current-month--hasMonthDropdown"),
              r.props.showMonthYearDropdown &&
                t.push("react-datepicker__current-month--hasMonthYearDropdown"),
              React.createElement(
                "div",
                { className: t.join(" ") },
                formatDate(e, r.props.dateFormat, r.props.locale)
              )
            );
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderYearDropdown",
          function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (r.props.showYearDropdown && !e)
              return React.createElement(YearDropdown, {
                adjustDateOnChange: r.props.adjustDateOnChange,
                date: r.state.date,
                onSelect: r.props.onSelect,
                setOpen: r.props.setOpen,
                dropdownMode: r.props.dropdownMode,
                onChange: r.changeYear,
                minDate: r.props.minDate,
                maxDate: r.props.maxDate,
                year: getYear(r.state.date),
                scrollableYearDropdown: r.props.scrollableYearDropdown,
                yearDropdownItemNumber: r.props.yearDropdownItemNumber
              });
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderMonthDropdown",
          function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (r.props.showMonthDropdown && !e)
              return React.createElement(MonthDropdown, {
                dropdownMode: r.props.dropdownMode,
                locale: r.props.locale,
                onChange: r.changeMonth,
                month: getMonth(r.state.date),
                useShortMonthInDropdown: r.props.useShortMonthInDropdown
              });
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderMonthYearDropdown",
          function() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (r.props.showMonthYearDropdown && !e)
              return React.createElement(MonthYearDropdown, {
                dropdownMode: r.props.dropdownMode,
                locale: r.props.locale,
                dateFormat: r.props.dateFormat,
                onChange: r.changeMonthYear,
                minDate: r.props.minDate,
                maxDate: r.props.maxDate,
                date: r.state.date,
                scrollableMonthYearDropdown: r.props.scrollableMonthYearDropdown
              });
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderTodayButton",
          function() {
            if (r.props.todayButton && !r.props.showTimeSelectOnly)
              return React.createElement(
                "div",
                {
                  className: "react-datepicker__today-button",
                  onClick: function(e) {
                    return r.props.onSelect(getStartOfToday(), e);
                  }
                },
                r.props.todayButton
              );
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderDefaultHeader",
          function(e) {
            var t = e.monthDate,
              n = e.i;
            return React.createElement(
              "div",
              { className: "react-datepicker__header" },
              r.renderCurrentMonth(t),
              React.createElement(
                "div",
                {
                  className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                    r.props.dropdownMode
                  ),
                  onFocus: r.handleDropdownFocus
                },
                r.renderMonthDropdown(0 !== n),
                r.renderMonthYearDropdown(0 !== n),
                r.renderYearDropdown(0 !== n)
              ),
              React.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                r.header(t)
              )
            );
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderCustomHeader",
          function(e) {
            var t = e.monthDate;
            if (0 !== e.i) return null;
            var n = monthDisabledBefore(r.state.date, r.props),
              a = monthDisabledAfter(r.state.date, r.props),
              o = yearDisabledBefore(r.state.date, r.props),
              s = yearDisabledAfter(r.state.date, r.props);
            return React.createElement(
              "div",
              {
                className:
                  "react-datepicker__header react-datepicker__header--custom",
                onFocus: r.props.onDropdownFocus
              },
              r.props.renderCustomHeader(
                _objectSpread2({}, r.state, {
                  changeMonth: r.changeMonth,
                  changeYear: r.changeYear,
                  decreaseMonth: r.decreaseMonth,
                  increaseMonth: r.increaseMonth,
                  decreaseYear: r.decreaseYear,
                  increaseYear: r.increaseYear,
                  prevMonthButtonDisabled: n,
                  nextMonthButtonDisabled: a,
                  prevYearButtonDisabled: o,
                  nextYearButtonDisabled: s
                })
              ),
              !r.props.showMonthYearPicker &&
                React.createElement(
                  "div",
                  { className: "react-datepicker__day-names" },
                  r.header(t)
                )
            );
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderYearHeader",
          function() {
            return React.createElement(
              "div",
              {
                className:
                  "react-datepicker__header react-datepicker-year-header"
              },
              getYear(r.state.date)
            );
          }
        ),
        _defineProperty(_assertThisInitialized(r), "renderMonths", function() {
          if (!r.props.showTimeSelectOnly) {
            for (
              var e = [],
                t = r.props.showPreviousMonths ? r.props.monthsShown - 1 : 0,
                n = subMonths(r.state.date, t),
                a = 0;
              a < r.props.monthsShown;
              ++a
            ) {
              var o = a - r.props.monthSelectedIn,
                s = addMonths(n, o),
                i = "month-".concat(a);
              e.push(
                React.createElement(
                  "div",
                  {
                    key: i,
                    ref: function(e) {
                      r.monthContainer = e;
                    },
                    className: "react-datepicker__month-container"
                  },
                  r.props.renderCustomHeader
                    ? r.renderCustomHeader({ monthDate: s, i: a })
                    : r.props.showMonthYearPicker
                    ? r.renderYearHeader({ monthDate: s, i: a })
                    : r.renderDefaultHeader({ monthDate: s, i: a }),
                  React.createElement(Month, {
                    onChange: r.changeMonthYear,
                    day: s,
                    dayClassName: r.props.dayClassName,
                    onDayClick: r.handleDayClick,
                    onDayMouseEnter: r.handleDayMouseEnter,
                    onMouseLeave: r.handleMonthMouseLeave,
                    onWeekSelect: r.props.onWeekSelect,
                    orderInDisplay: a,
                    formatWeekNumber: r.props.formatWeekNumber,
                    locale: r.props.locale,
                    minDate: r.props.minDate,
                    maxDate: r.props.maxDate,
                    excludeDates: r.props.excludeDates,
                    highlightDates: r.props.highlightDates,
                    selectingDate: r.state.selectingDate,
                    includeDates: r.props.includeDates,
                    inline: r.props.inline,
                    fixedHeight: r.props.fixedHeight,
                    filterDate: r.props.filterDate,
                    preSelection: r.props.preSelection,
                    selected: r.props.selected,
                    selectsStart: r.props.selectsStart,
                    selectsEnd: r.props.selectsEnd,
                    showWeekNumbers: r.props.showWeekNumbers,
                    startDate: r.props.startDate,
                    endDate: r.props.endDate,
                    peekNextMonth: r.props.peekNextMonth,
                    setOpen: r.props.setOpen,
                    shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                    renderDayContents: r.props.renderDayContents,
                    disabledKeyboardNavigation:
                      r.props.disabledKeyboardNavigation,
                    showMonthYearPicker: r.props.showMonthYearPicker,
                    showQuarterYearPicker: r.props.showQuarterYearPicker
                  })
                )
              );
            }
            return e;
          }
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "renderTimeSection",
          function() {
            if (
              r.props.showTimeSelect &&
              (r.state.monthContainer || r.props.showTimeSelectOnly)
            )
              return React.createElement(Time, {
                selected: r.props.selected,
                openToDate: r.props.openToDate,
                onChange: r.props.onTimeChange,
                format: r.props.timeFormat,
                includeTimes: r.props.includeTimes,
                intervals: r.props.timeIntervals,
                minTime: r.props.minTime,
                maxTime: r.props.maxTime,
                excludeTimes: r.props.excludeTimes,
                timeCaption: r.props.timeCaption,
                todayButton: r.props.todayButton,
                showMonthDropdown: r.props.showMonthDropdown,
                showMonthYearDropdown: r.props.showMonthYearDropdown,
                showYearDropdown: r.props.showYearDropdown,
                withPortal: r.props.withPortal,
                monthRef: r.state.monthContainer,
                injectTimes: r.props.injectTimes,
                locale: r.props.locale
              });
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderInputTimeSection",
          function() {
            var e = new Date(r.props.selected),
              t = ""
                .concat(addZero(e.getHours()), ":")
                .concat(addZero(e.getMinutes()));
            if (r.props.showTimeInput)
              return React.createElement(inputTime, {
                timeString: t,
                timeInputLabel: r.props.timeInputLabel,
                onChange: r.props.onTimeChange
              });
          }
        ),
        (r.containerRef = React.createRef()),
        (r.state = {
          date: r.getDateInView(),
          selectingDate: null,
          monthContainer: null
        }),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(t, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              onDropdownFocus: function() {},
              monthsShown: 1,
              monthSelectedIn: 0,
              forceShowMonthNavigation: !1,
              timeCaption: "Time",
              previousYearButtonLabel: "Previous Year",
              nextYearButtonLabel: "Next Year",
              previousMonthButtonLabel: "Previous Month",
              nextMonthButtonLabel: "Next Month"
            };
          }
        }
      ]),
      _createClass(t, [
        {
          key: "componentDidMount",
          value: function() {
            var e = this;
            this.props.showTimeSelect &&
              (this.assignMonthContainer = void e.setState({
                monthContainer: e.monthContainer
              }));
          }
        },
        {
          key: "componentDidUpdate",
          value: function(e) {
            this.props.preSelection &&
            !isSameDay(this.props.preSelection, e.preSelection)
              ? this.setState({ date: this.props.preSelection })
              : this.props.openToDate &&
                !isSameDay(this.props.openToDate, e.openToDate) &&
                this.setState({ date: this.props.openToDate });
          }
        },
        {
          key: "render",
          value: function() {
            var e = this.props.container || CalendarContainer;
            return React.createElement(
              "div",
              { ref: this.containerRef },
              React.createElement(
                e,
                {
                  className: classnames(
                    "react-datepicker",
                    this.props.className,
                    {
                      "react-datepicker--time-only": this.props
                        .showTimeSelectOnly
                    }
                  ),
                  showPopperArrow: this.props.showPopperArrow
                },
                this.renderPreviousButton(),
                this.renderNextButton(),
                this.renderMonths(),
                this.renderTodayButton(),
                this.renderTimeSection(),
                this.renderInputTimeSection(),
                this.props.children
              )
            );
          }
        }
      ]),
      t
    );
  })(),
  PopperComponent = (function(e) {
    function t() {
      return (
        _classCallCheck(this, t),
        _possibleConstructorReturn(
          this,
          _getPrototypeOf(t).apply(this, arguments)
        )
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(
        t,
        [
          {
            key: "render",
            value: function() {
              var e,
                t = this.props,
                r = t.className,
                n = t.wrapperClassName,
                a = t.hidePopper,
                o = t.popperComponent,
                s = t.popperModifiers,
                i = t.popperPlacement,
                p = t.popperProps,
                c = t.targetComponent;
              if (!a) {
                var l = classnames("react-datepicker-popper", r);
                e = reactDom.createPortal(
                  React.createElement(
                    reactPopper.Popper,
                    _extends({ modifiers: s, placement: i }, p),
                    function(e) {
                      var t = e.ref,
                        r = e.style,
                        n = e.placement,
                        a = e.arrowProps;
                      return React.createElement(
                        "div",
                        _extends(
                          { ref: t, style: r },
                          { className: l, "data-placement": n }
                        ),
                        React.cloneElement(o, { arrowProps: a })
                      );
                    }
                  ),
                  document.body
                );
              }
              this.props.popperContainer &&
                (e = React.createElement(this.props.popperContainer, {}, e));
              var d = classnames("react-datepicker-wrapper", n);
              return React.createElement(
                reactPopper.Manager,
                { className: "react-datepicker-manager" },
                React.createElement(reactPopper.Reference, null, function(e) {
                  var t = e.ref;
                  return React.createElement(
                    "div",
                    { ref: t, className: d },
                    c
                  );
                }),
                e
              );
            }
          }
        ],
        [
          {
            key: "defaultProps",
            get: function() {
              return {
                hidePopper: !0,
                popperModifiers: {
                  preventOverflow: {
                    enabled: !0,
                    escapeWithReference: !0,
                    boundariesElement: "viewport"
                  }
                },
                popperProps: {},
                popperPlacement: "bottom-start"
              };
            }
          }
        ]
      ),
      t
    );
  })(),
  outsideClickIgnoreClass = "react-datepicker-ignore-onclickoutside",
  WrappedCalendar = onClickOutside(Calendar);
function hasPreSelectionChanged(e, t) {
  return e && t
    ? getMonth(e) !== getMonth(t) || getYear(e) !== getYear(t)
    : e !== t;
}
var INPUT_ERR_1 = "Date input not valid.",
  DatePicker = (function(e) {
    function t(e) {
      var r;
      return (
        _classCallCheck(this, t),
        _defineProperty(
          _assertThisInitialized(
            (r = _possibleConstructorReturn(
              this,
              _getPrototypeOf(t).call(this, e)
            ))
          ),
          "getPreSelection",
          function() {
            return r.props.openToDate
              ? r.props.openToDate
              : r.props.selectsEnd && r.props.startDate
              ? r.props.startDate
              : r.props.selectsStart && r.props.endDate
              ? r.props.endDate
              : newDate();
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "calcInitialState",
          function() {
            var e = r.getPreSelection(),
              t = getEffectiveMinDate(r.props),
              n = getEffectiveMaxDate(r.props),
              a = t && isBefore(e, t) ? t : n && isAfter(e, n) ? n : e;
            return {
              open: r.props.startOpen || !1,
              preventFocus: !1,
              preSelection: r.props.selected ? r.props.selected : a,
              highlightDates: getHightLightDaysMap(r.props.highlightDates),
              focused: !1
            };
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "clearPreventFocusTimeout",
          function() {
            r.preventFocusTimeout && clearTimeout(r.preventFocusTimeout);
          }
        ),
        _defineProperty(_assertThisInitialized(r), "setFocus", function() {
          r.input && r.input.focus && r.input.focus();
        }),
        _defineProperty(_assertThisInitialized(r), "setBlur", function() {
          r.input && r.input.blur && r.input.blur(), r.cancelFocusInput();
        }),
        _defineProperty(_assertThisInitialized(r), "setOpen", function(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          r.setState(
            {
              open: e,
              preSelection:
                e && r.state.open
                  ? r.state.preSelection
                  : r.calcInitialState().preSelection,
              lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE
            },
            function() {
              e ||
                r.setState(
                  function(e) {
                    return { focused: !!t && e.focused };
                  },
                  function() {
                    !t && r.setBlur(), r.setState({ inputValue: null });
                  }
                );
            }
          );
        }),
        _defineProperty(_assertThisInitialized(r), "inputOk", function() {
          return isDate(r.state.preSelection);
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "isCalendarOpen",
          function() {
            return void 0 === r.props.open
              ? r.state.open && !r.props.disabled && !r.props.readOnly
              : r.props.open;
          }
        ),
        _defineProperty(_assertThisInitialized(r), "handleFocus", function(e) {
          r.state.preventFocus ||
            (r.props.onFocus(e),
            r.props.preventOpenOnFocus || r.props.readOnly || r.setOpen(!0)),
            r.setState({ focused: !0 });
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "cancelFocusInput",
          function() {
            clearTimeout(r.inputFocusTimeout), (r.inputFocusTimeout = null);
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "deferFocusInput",
          function() {
            r.cancelFocusInput(),
              (r.inputFocusTimeout = setTimeout(function() {
                return r.setFocus();
              }, 1));
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "handleDropdownFocus",
          function() {
            r.cancelFocusInput();
          }
        ),
        _defineProperty(_assertThisInitialized(r), "handleBlur", function(e) {
          !r.state.open || r.props.withPortal || r.props.showTimeInput
            ? r.props.onBlur(e)
            : r.deferFocusInput(),
            r.setState({ focused: !1 });
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "handleCalendarClickOutside",
          function(e) {
            r.props.inline || r.setOpen(!1),
              r.props.onClickOutside(e),
              r.props.withPortal && e.preventDefault();
          }
        ),
        _defineProperty(_assertThisInitialized(r), "handleChange", function() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var a = t[0];
          if (
            !r.props.onChangeRaw ||
            (r.props.onChangeRaw.apply(_assertThisInitialized(r), t),
            "function" == typeof a.isDefaultPrevented &&
              !a.isDefaultPrevented())
          ) {
            r.setState({
              inputValue: a.target.value,
              lastPreSelectChange: PRESELECT_CHANGE_VIA_INPUT
            });
            var o = parseDate(
              a.target.value,
              r.props.dateFormat,
              r.props.locale,
              r.props.strictParsing
            );
            (!o && a.target.value) || r.setSelected(o, a, !0);
          }
        }),
        _defineProperty(_assertThisInitialized(r), "handleSelect", function(
          e,
          t,
          n
        ) {
          r.setState({ preventFocus: !0 }, function() {
            return (
              (r.preventFocusTimeout = setTimeout(function() {
                return r.setState({ preventFocus: !1 });
              }, 50)),
              r.preventFocusTimeout
            );
          }),
            r.setSelected(e, t, void 0, n),
            !r.props.shouldCloseOnSelect || r.props.showTimeSelect
              ? r.setPreSelection(e)
              : r.props.inline || r.setOpen(!1);
        }),
        _defineProperty(_assertThisInitialized(r), "setSelected", function(
          e,
          t,
          n,
          a
        ) {
          var o = e;
          if (null === o || !isDayDisabled(o, r.props)) {
            if (!isEqual(r.props.selected, o) || r.props.allowSameDay) {
              if (null !== o) {
                if (r.props.selected) {
                  var s = r.props.selected;
                  n && (s = newDate(o)),
                    (o = setTime(o, {
                      hour: getHours(s),
                      minute: getMinutes(s),
                      second: getSeconds(s)
                    }));
                }
                r.props.inline || r.setState({ preSelection: o }),
                  r.props.inline &&
                    r.props.monthsShown > 1 &&
                    !r.props.inlineFocusSelectedMonth &&
                    r.setState({ monthSelectedIn: a });
              }
              r.props.onChange(o, t);
            }
            r.props.onSelect(o, t), n || r.setState({ inputValue: null });
          }
        }),
        _defineProperty(_assertThisInitialized(r), "setPreSelection", function(
          e
        ) {
          var t = void 0 !== r.props.minDate,
            n = void 0 !== r.props.maxDate,
            a = !0;
          e &&
            (t && n
              ? (a = isDayInRange(e, r.props.minDate, r.props.maxDate))
              : t
              ? (a = isAfter(e, r.props.minDate))
              : n && (a = isBefore(e, r.props.maxDate))),
            a && r.setState({ preSelection: e });
        }),
        _defineProperty(_assertThisInitialized(r), "handleTimeChange", function(
          e
        ) {
          var t = setTime(
            r.props.selected ? r.props.selected : r.getPreSelection(),
            { hour: getHours(e), minute: getMinutes(e) }
          );
          r.setState({ preSelection: t }),
            r.props.onChange(t),
            r.props.shouldCloseOnSelect && r.setOpen(!1),
            r.props.showTimeInput && r.setOpen(!0),
            r.setState({ inputValue: null });
        }),
        _defineProperty(_assertThisInitialized(r), "onInputClick", function() {
          r.props.disabled || r.props.readOnly || r.setOpen(!0),
            r.props.onInputClick();
        }),
        _defineProperty(_assertThisInitialized(r), "onInputKeyDown", function(
          e
        ) {
          r.props.onKeyDown(e);
          var t = e.key;
          if (r.state.open || r.props.inline || r.props.preventOpenOnFocus) {
            var n = newDate(r.state.preSelection);
            if ("Enter" === t)
              e.preventDefault(),
                r.inputOk() &&
                r.state.lastPreSelectChange === PRESELECT_CHANGE_VIA_NAVIGATE
                  ? (r.handleSelect(n, e),
                    !r.props.shouldCloseOnSelect && r.setPreSelection(n))
                  : r.setOpen(!1);
            else if ("Escape" === t)
              e.preventDefault(),
                r.setOpen(!1),
                r.inputOk() ||
                  r.props.onInputError({ code: 1, msg: INPUT_ERR_1 });
            else if ("Tab" === t) r.setOpen(!1, !0);
            else if (!r.props.disabledKeyboardNavigation) {
              var a;
              switch (t) {
                case "ArrowLeft":
                  a = subDays(n, 1);
                  break;
                case "ArrowRight":
                  a = utils(n, 1);
                  break;
                case "ArrowUp":
                  a = subWeeks(n, 1);
                  break;
                case "ArrowDown":
                  a = utils$1(n, 1);
                  break;
                case "PageUp":
                  a = subMonths(n, 1);
                  break;
                case "PageDown":
                  a = addMonths(n, 1);
                  break;
                case "Home":
                  a = subYears(n, 1);
                  break;
                case "End":
                  a = addYears(n, 1);
              }
              if (!a)
                return void (
                  r.props.onInputError &&
                  r.props.onInputError({ code: 1, msg: INPUT_ERR_1 })
                );
              e.preventDefault(),
                r.setState({
                  lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE
                }),
                r.props.adjustDateOnChange && r.setSelected(a),
                r.setPreSelection(a);
            }
          } else ("ArrowDown" !== t && "ArrowUp" !== t) || r.onInputClick();
        }),
        _defineProperty(_assertThisInitialized(r), "onClearClick", function(e) {
          e && e.preventDefault && e.preventDefault(),
            r.props.onChange(null, e),
            r.setState({ inputValue: null });
        }),
        _defineProperty(_assertThisInitialized(r), "clear", function() {
          r.onClearClick();
        }),
        _defineProperty(
          _assertThisInitialized(r),
          "renderCalendar",
          function() {
            return r.props.inline || r.isCalendarOpen()
              ? React.createElement(
                  WrappedCalendar,
                  {
                    ref: function(e) {
                      r.calendar = e;
                    },
                    locale: r.props.locale,
                    adjustDateOnChange: r.props.adjustDateOnChange,
                    setOpen: r.setOpen,
                    shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                    dateFormat: r.props.dateFormatCalendar,
                    useWeekdaysShort: r.props.useWeekdaysShort,
                    formatWeekDay: r.props.formatWeekDay,
                    dropdownMode: r.props.dropdownMode,
                    selected: r.props.selected,
                    preSelection: r.state.preSelection,
                    onSelect: r.handleSelect,
                    onClickDay: r.props.onClickDay,
                    onWeekSelect: r.props.onWeekSelect,
                    openToDate: r.props.openToDate,
                    minDate: r.props.minDate,
                    maxDate: r.props.maxDate,
                    selectsStart: r.props.selectsStart,
                    selectsEnd: r.props.selectsEnd,
                    startDate: r.props.startDate,
                    endDate: r.props.endDate,
                    excludeDates: r.props.excludeDates,
                    filterDate: r.props.filterDate,
                    onClickOutside: r.handleCalendarClickOutside,
                    formatWeekNumber: r.props.formatWeekNumber,
                    highlightDates: r.state.highlightDates,
                    includeDates: r.props.includeDates,
                    includeTimes: r.props.includeTimes,
                    injectTimes: r.props.injectTimes,
                    inline: r.props.inline,
                    peekNextMonth: r.props.peekNextMonth,
                    showMonthDropdown: r.props.showMonthDropdown,
                    showPreviousMonths: r.props.showPreviousMonths,
                    useShortMonthInDropdown: r.props.useShortMonthInDropdown,
                    showMonthYearDropdown: r.props.showMonthYearDropdown,
                    showWeekNumbers: r.props.showWeekNumbers,
                    showYearDropdown: r.props.showYearDropdown,
                    withPortal: r.props.withPortal,
                    forceShowMonthNavigation: r.props.forceShowMonthNavigation,
                    showDisabledMonthNavigation:
                      r.props.showDisabledMonthNavigation,
                    scrollableYearDropdown: r.props.scrollableYearDropdown,
                    scrollableMonthYearDropdown:
                      r.props.scrollableMonthYearDropdown,
                    todayButton: r.props.todayButton,
                    weekLabel: r.props.weekLabel,
                    outsideClickIgnoreClass: outsideClickIgnoreClass,
                    fixedHeight: r.props.fixedHeight,
                    monthsShown: r.props.monthsShown,
                    monthSelectedIn: r.state.monthSelectedIn,
                    onDropdownFocus: r.handleDropdownFocus,
                    onMonthChange: r.props.onMonthChange,
                    onYearChange: r.props.onYearChange,
                    dayClassName: r.props.dayClassName,
                    showTimeSelect: r.props.showTimeSelect,
                    showTimeSelectOnly: r.props.showTimeSelectOnly,
                    onTimeChange: r.handleTimeChange,
                    timeFormat: r.props.timeFormat,
                    timeIntervals: r.props.timeIntervals,
                    minTime: r.props.minTime,
                    maxTime: r.props.maxTime,
                    excludeTimes: r.props.excludeTimes,
                    timeCaption: r.props.timeCaption,
                    className: r.props.calendarClassName,
                    container: r.props.calendarContainer,
                    yearDropdownItemNumber: r.props.yearDropdownItemNumber,
                    previousMonthButtonLabel: r.props.previousMonthButtonLabel,
                    nextMonthButtonLabel: r.props.nextMonthButtonLabel,
                    previousYearButtonLabel: r.props.previousYearButtonLabel,
                    nextYearButtonLabel: r.props.nextYearButtonLabel,
                    timeInputLabel: r.props.timeInputLabel,
                    disabledKeyboardNavigation:
                      r.props.disabledKeyboardNavigation,
                    renderCustomHeader: r.props.renderCustomHeader,
                    popperProps: r.props.popperProps,
                    renderDayContents: r.props.renderDayContents,
                    onDayMouseEnter: r.props.onDayMouseEnter,
                    onMonthMouseLeave: r.props.onMonthMouseLeave,
                    showTimeInput: r.props.showTimeInput,
                    showMonthYearPicker: r.props.showMonthYearPicker,
                    showQuarterYearPicker: r.props.showQuarterYearPicker,
                    showPopperArrow: r.props.showPopperArrow
                  },
                  r.props.children
                )
              : null;
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderDateInput",
          function() {
            var e,
              t = classnames(
                r.props.className,
                _defineProperty({}, outsideClickIgnoreClass, r.state.open)
              ),
              n =
                r.props.customInput ||
                React.createElement("input", { type: "text" }),
              a = r.props.customInputRef || "ref",
              o =
                "string" == typeof r.props.value
                  ? r.props.value
                  : "string" == typeof r.state.inputValue
                  ? r.state.inputValue
                  : safeDateFormat(r.props.selected, r.props);
            return React.cloneElement(
              n,
              (_defineProperty((e = {}), a, function(e) {
                r.input = e;
              }),
              _defineProperty(e, "value", o),
              _defineProperty(e, "onBlur", r.handleBlur),
              _defineProperty(e, "onChange", r.handleChange),
              _defineProperty(e, "onClick", r.onInputClick),
              _defineProperty(e, "onFocus", r.handleFocus),
              _defineProperty(e, "onKeyDown", r.onInputKeyDown),
              _defineProperty(e, "id", r.props.id),
              _defineProperty(e, "name", r.props.name),
              _defineProperty(e, "autoFocus", r.props.autoFocus),
              _defineProperty(e, "placeholder", r.props.placeholderText),
              _defineProperty(e, "disabled", r.props.disabled),
              _defineProperty(e, "autoComplete", r.props.autoComplete),
              _defineProperty(e, "className", classnames(n.props.className, t)),
              _defineProperty(e, "title", r.props.title),
              _defineProperty(e, "readOnly", r.props.readOnly),
              _defineProperty(e, "required", r.props.required),
              _defineProperty(e, "tabIndex", r.props.tabIndex),
              _defineProperty(e, "aria-labelledby", r.props.ariaLabelledBy),
              e)
            );
          }
        ),
        _defineProperty(
          _assertThisInitialized(r),
          "renderClearButton",
          function() {
            return r.props.isClearable && null != r.props.selected
              ? React.createElement("button", {
                  type: "button",
                  className: "react-datepicker__close-icon",
                  "aria-label": "Close",
                  onClick: r.onClearClick,
                  title: r.props.clearButtonTitle,
                  tabIndex: -1
                })
              : null;
          }
        ),
        (r.state = r.calcInitialState()),
        r
      );
    }
    return (
      _inherits(t, React.Component),
      _createClass(t, null, [
        {
          key: "defaultProps",
          get: function() {
            return {
              allowSameDay: !1,
              dateFormat: "MM/dd/yyyy",
              dateFormatCalendar: "LLLL yyyy",
              onChange: function() {},
              disabled: !1,
              disabledKeyboardNavigation: !1,
              dropdownMode: "scroll",
              onFocus: function() {},
              onBlur: function() {},
              onKeyDown: function() {},
              onInputClick: function() {},
              onSelect: function() {},
              onClickDay: function() {},
              onClickOutside: function() {},
              onMonthChange: function() {},
              onCalendarOpen: function() {},
              onCalendarClose: function() {},
              preventOpenOnFocus: !1,
              onYearChange: function() {},
              onInputError: function() {},
              monthsShown: 1,
              readOnly: !1,
              withPortal: !1,
              shouldCloseOnSelect: !0,
              showTimeSelect: !1,
              showTimeInput: !1,
              showPreviousMonths: !1,
              showMonthYearPicker: !1,
              showQuarterYearPicker: !1,
              strictParsing: !1,
              timeIntervals: 30,
              timeCaption: "Time",
              previousMonthButtonLabel: "Previous Month",
              nextMonthButtonLabel: "Next Month",
              previousYearButtonLabel: "Previous Year",
              nextYearButtonLabel: "Next Year",
              timeInputLabel: "Time",
              renderDayContents: function(e) {
                return e;
              },
              inlineFocusSelectedMonth: !1,
              showPopperArrow: !0
            };
          }
        }
      ]),
      _createClass(t, [
        {
          key: "componentDidUpdate",
          value: function(e, t) {
            e.inline &&
              hasPreSelectionChanged(e.selected, this.props.selected) &&
              this.setPreSelection(this.props.selected),
              void 0 !== this.state.monthSelectedIn &&
                e.monthsShown !== this.props.monthsShown &&
                this.setState({ monthSelectedIn: 0 }),
              e.highlightDates !== this.props.highlightDates &&
                this.setState({
                  highlightDates: getHightLightDaysMap(
                    this.props.highlightDates
                  )
                }),
              t.focused ||
                isEqual(e.selected, this.props.selected) ||
                this.setState({ inputValue: null }),
              t.open !== this.state.open &&
                (!1 === t.open &&
                  !0 === this.state.open &&
                  this.props.onCalendarOpen(),
                !0 === t.open &&
                  !1 === this.state.open &&
                  this.props.onCalendarClose());
          }
        },
        {
          key: "componentWillUnmount",
          value: function() {
            this.clearPreventFocusTimeout();
          }
        },
        {
          key: "render",
          value: function() {
            var e = this.renderCalendar();
            return this.props.inline && !this.props.withPortal
              ? e
              : this.props.withPortal
              ? React.createElement(
                  "div",
                  null,
                  this.props.inline
                    ? null
                    : React.createElement(
                        "div",
                        { className: "react-datepicker__input-container" },
                        this.renderDateInput(),
                        this.renderClearButton()
                      ),
                  this.state.open || this.props.inline
                    ? React.createElement(
                        "div",
                        { className: "react-datepicker__portal" },
                        e
                      )
                    : null
                )
              : React.createElement(PopperComponent, {
                  className: this.props.popperClassName,
                  wrapperClassName: this.props.wrapperClassName,
                  hidePopper: !this.isCalendarOpen(),
                  popperModifiers: this.props.popperModifiers,
                  targetComponent: React.createElement(
                    "div",
                    { className: "react-datepicker__input-container" },
                    this.renderDateInput(),
                    this.renderClearButton()
                  ),
                  popperContainer: this.props.popperContainer,
                  popperComponent: e,
                  popperPlacement: this.props.popperPlacement,
                  popperProps: this.props.popperProps
                });
          }
        }
      ]),
      t
    );
  })(),
  PRESELECT_CHANGE_VIA_INPUT = "input",
  PRESELECT_CHANGE_VIA_NAVIGATE = "navigate";
(exports.CalendarContainer = CalendarContainer),
  (exports.default = DatePicker),
  (exports.getDefaultLocale = getDefaultLocale),
  (exports.registerLocale = registerLocale),
  (exports.setDefaultLocale = setDefaultLocale);
