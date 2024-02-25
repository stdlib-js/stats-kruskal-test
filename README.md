<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# kruskalTest

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the Kruskal-Wallis test for equal medians.

<section class="intro">

The Kruskal-Wallis rank sum test evaluates for multiple samples the null hypothesis that their medians are identical. The Kruskal-Wallis test is a nonparametric test which does not require the data to be normally distributed.

To carry out the test, the rank sums `S_h` of the individual groups are calculated. The test statistic is then calculated as

<!-- <equation class="equation" label="eq:kruskal_test_statistic" align="center" raw="H = \frac{\tfrac{12}{N(N+1)}\sum_h\tfrac{S_h^2}{n_h}-3(N+1)}{1-\tfrac{1}{(N^3-N)} \sum t_{r(i)}^3 - t_{r(i)}}" alt="Equation for the Kruskal-Wallis test statistic."> -->

```math
H = \frac{\tfrac{12}{N(N+1)}\sum_h\tfrac{S_h^2}{n_h}-3(N+1)}{1-\tfrac{1}{(N^3-N)} \sum t_{r(i)}^3 - t_{r(i)}}
```

<!-- <div class="equation" align="center" data-raw-text="H = \frac{\tfrac{12}{N(N+1)}\sum_h\tfrac{S_h^2}{n_h}-3(N+1)}{1-\tfrac{1}{(N^3-N)} \sum t_{r(i)}^3 - t_{r(i)}}" data-equation="eq:kruskal_test_statistic">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e1fbdee688c5409e4cc6b0cd06d90b1cd2abd67c/lib/node_modules/@stdlib/stats/kruskal-test/docs/img/equation_kruskal_test_statistic.svg" alt="Equation for the Kruskal-Wallis test statistic.">
    <br>
</div> -->

<!-- </equation> -->

where `N` denotes the total number of observations and `t_{r(i)}` are the number of tied observations with rank _i_.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import kruskalTest from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-kruskal-test@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-kruskal-test/tags). For example,

```javascript
import kruskalTest from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-kruskal-test@v0.2.1-esm/index.mjs';
```

#### kruskalTest( a\[,b,...,k]\[, opts] )

For input arrays `a`, `b`, ... holding numeric observations, this function calculates the Kruskal-Wallis rank sums test, which tests the null hypothesis that the medians in all `k` groups are the same. 

```javascript
// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = kruskalTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': 2,
        'pValue': ~0.68,
        'statistic': ~0.771,
        ...
    }
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **groups**: an `array` of group indicators. If set, the function assumes that only a single numeric array is provided holding all observations.

By default, the test is carried out at a significance level of `0.05`. To choose a custom significance level, set the `alpha` option.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = kruskalTest( x, y, z, {
    'alpha': 0.01
});
/* returns
    {
        'rejected': false,
        'alpha': 0.01,
        'df': 2,
        'pValue': ~0.68,
        'statistic': ~0.771,
        ...
    }
*/
```

The function provides an alternate interface by supplying an array of group indicators to the `groups` option. In this case, it is assumed that only a single numeric array holding all observations is provided to the function.

<!-- eslint-disable array-element-newline -->

```javascript
var arr = [
    2.9, 3.0, 2.5, 2.6, 3.2,
    3.8, 2.7, 4.0, 2.4,
    2.8, 3.4, 3.7, 2.2, 2.0
];
var groups = [
    'a', 'a', 'a', 'a', 'a',
    'b', 'b', 'b', 'b',
    'c', 'c', 'c', 'c', 'c'
];
var out = kruskalTest( arr, {
    'groups': groups
});
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = kruskalTest( x, y, z );
console.log( out.print() );
/* =>
    Kruskal-Wallis Test

    Null hypothesis: the medians of all groups are the same

        pValue: 0.68
        statistic: 0.7714    df: 2

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import kruskalTest from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-kruskal-test@esm/index.mjs';

// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = kruskalTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': 2,
        'pValue': ~0.68,
        'statistic': ~0.771,
        ...
    }
*/

var table = out.print();
/* returns
    Kruskal-Wallis Test

    Null hypothesis: the medians of all groups are the same

        pValue: 0.68
        statistic: 0.7714    df: 2

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-kruskal-test.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-kruskal-test

[test-image]: https://github.com/stdlib-js/stats-kruskal-test/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/stats-kruskal-test/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-kruskal-test/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-kruskal-test?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-kruskal-test.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-kruskal-test/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-kruskal-test/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-kruskal-test/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-kruskal-test/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-kruskal-test/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-kruskal-test/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-kruskal-test/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-kruskal-test/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-kruskal-test/main/LICENSE

</section>

<!-- /.links -->
