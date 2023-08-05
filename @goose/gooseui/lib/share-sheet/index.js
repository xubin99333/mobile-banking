"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _utils = require("../utils");

var _popup = require("../mixins/popup");

var _popup2 = _interopRequireDefault(require("../popup"));

// Utils
// Mixins
// Components
var PRESET_ICONS = {
  'qq': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAjVBMVEUAAAA3u/tDwv83u/s4u/s7u/pW+P83uvo4u/s4vfw4u/o4uvs5vv84vPw4u/s3u/s4uvs4u/o3u/s3u/o4u/w4vPs9wv9gz/85uvs4u/w3vPw4uvo3u/o5vPw5vfs3u/s3u/w3uvs3u/tHy/83u/w+v/83u/o4u/s4vPs5u/w4vPs4u/s4u/o3vf83uvq1vdlFAAAALnRSTlMA+g7tjjQCz6pK08cgWvfB6t/znE9EEwWCZVjboWM545W7tAqYGdh4cGI+g6UwaptHdQAAAyxJREFUaN6s1ulyolAUBOC+7Lu4a4yMTmKcTGb6/R8vlVSWioV9APn+Qt3LPTRdoBsvLDdJnk195/xpliebMvQwFi8NYraIg9QbYfXtxPEqN9netkeaVDRUSYqBojJjJ1kZDVl+v2Nnu33vLZqYvcQN+ljN2dt8hc4WPgfwF+hmHXCgYI0OipyD5QVMYc0b1CEMyxlvMltCunO8kbuT63MEYoel4wjc1SmFM45iFqJVUXMkdYEW65yjydu+uIAjClr6h7b6+O/xcH/8RdsCF1Y+DdOXr8mezhkN/mW3zqlly4vETajN8UPTuyejs6PU/Lg7pjJLB9RiHOHb3npjrZqKyh5foh2V87Dq2n0foaSS4KqASolPGQVXoJUd7gwfUiqPEM5UPrORUKhOEB7qDsP1Kgq/IR0oVB7ebKk8Q1pS2eLNhIJbQVr7FCbvE3L6FsM9BeeZGQpg+GPmKLCmqNnPF1P5C0NBJQY8SicYooqKh5ASTFMqoVF0FUxPRuFtqPgwZVQ2SKjUMOVUEuP6E0xHKrlxwheYnqlkRggKmB58ClP4RlfbDjolzvidsP2n4F6btZLlBmEo5rIUCFuAkq3uGAgwaQ/5/89rnLslB8YTdPCBCzP2W/SkB3+g7ASCFP7Ah0FshV94RRV7Yg6vRo+8o82GQ6IwTSn342hRosW0HXN87kGpOPEk4OhAnOS8W3IkoFyHPIY4roW54XhG9i04eEn1zE1fihdwMjd9EfAn4EgAbUkAYfEugqLNAHlJAHWcdIoGguLW67MwUEdAfo96+h9scuD2OBUoNmcTI8r8e30VDOr+EZrY0RkNIIfD/EwUgj/dNzJRgwHEUI6aWZ+9VSVVAZxPkxVdMyTknZOzCrwC0SB2doN4gzMYILeUEgI23nApQfws0ypyLIZYXmV6Mb7C8asncg4XpL5bEkUREqS4pFZPtNdUIDa4buLTtjbNUBTksua+HGQzdmMj46GMqqJQUTnE+lM3yrhUID+dCrPOpWXX4rhred+1QeHaYnFtErm2uVwbde+3GteZpduwexcb1luy3BcsDWxv7eGFxY0tr564X55Zv/7zD8aWtoXiQOiQAAAAAElFTkSuQmCC',
  'link': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAulBMVEUAAADz8/X09Pf////z9Pbz9Pbz9PXz9Pbz9Pby9ff19fj////y8/by9Pby8/bz9PXz9PXy9Pby8/bz8/by9PXz8/Xy9fX09Pj29vb19fX19fX39/fy///////y8/VkZWaoqat0dHbi4+Wtra53d3jf4OLq6+2ztbZucHHT1NaPkJFpamu4uLtmZ2fv8PLn5+nY2drNztDBw8R9foB5envc3d/Gx8m7vb6hoqOLjI2GiIl6e3yam5yEhIXxuCegAAAAHnRSTlMA7FoO+/jQqY5jSwPz39vU0snFwZ2CT0Y6NTQgFAWfM4pkAAAC7ElEQVRo3s2a2VYiMRCGO72D7Iso6C/aDs0qi7jPvP9rDRFzRAc7qSZ1hu9Kb76iT5JKUhXHDK/rtqNGrSyCQJRrjajtdj3HFl4xDrGHMC56FuyFpo8f8ZuFw2IUowAagqiY137iVmFE1T3Joy9UYEylQA5xFoJEeEbSX7RApnVh7j8VyIE4NdRfxshJfGni79WRm3pP7z8XOABxrvN3SjiIUifb7/o4EN/N9MMCGRE6Pizgd34c3xKsUPphpHsClhC9veurDmvU9624GBaJ9+QfWOX0n/wpYBXxPbe2YJnWt/0F1jn7sj+GsE64u4sWwEBh5wMqYKByoslxFrNeFSxUlb8IJtSZLwIT0dbvBaCySNN0CS2Bl2+OTtdXktsUZjO1CRr9K8V4gGya0u/5dL/iTRPB99QcovqvX9bbbzCYRzEo3I2lNwHwOJR/pfqNJwQ5QgLJg4zwhkxCx/EAaoQEW1byExbIxHO6yI/8hCky6VIS3U3/9f71eecnX+sHwXXaMGU6u3rnt5qbI/nfIzJpOxF9/t9vI/ySHzDRrITIadDXV1/5Nzwjm4ZTo/jH0/7wi/92jmxqTpngT+RIT3f9N9BQdgTND5D8EE7A6kfgBFx+FUCQ/HdEP4RTpvgfrpMBRgQ/ytppuvri36wsqTf2o6ZdaOtP//zdTfKjoUsVI7V0JelMbZWmfkS6ZJdudMM7fLB4kSEmzwOY0tal60QmN3wyX66WA5jj6jacJ/mL52r+j0Clq9sy5zO5A6j1NSRH8LSb/sv7KKv1RY0Q6o8ti4mM8Po4etr45XiQiNXBSzMK5PmvKJocHZNZbr/vGR1+l8MP/5roR9Pw+D6Y/pnMJuPVAEQK6gLCROBxX6HYL4Hc11j2izh7KYG7GMJezuEuSHGX1NiLgtxlTe7CLHtpmbs4zl3e525QcLdYuJtE3G0u7kbd/281HtYsPY52b+6G9TG13HM8Gji+Zw+EhxvH/PTEwuMZ9uc/fwHI9VO0QKM2+QAAAABJRU5ErkJggg==',
  'weibo': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAk1BMVEUAAADvWV7vWF7uWF7vWV/vWV7vWF7wWV//lpbvWF7wYmP/X2nxWWD/dHTvWF/0XWPvWV/vWV7wWGDwWmHvWWDvWF7uWF7vWV/vWF7wWF7wWV/xXGLvWV/xWWHuWV/vWV/vWV/vWV7vWV/vWV/vWV/wWl/wXmLuWF/vWV/uWF/uWF/wWV/xW2H/gIDvWWDzXGPuWF6ZfYo2AAAAMHRSTlMA7vn1qlvSSgP7EA03BsIWzKFlPE7gxtyzglIibzTWm46Taui7RB7jeouIdi0CYCexFRcuAAAEeElEQVRo3qzW23qiMBQF4JWAIAcRT1AVBRWd1nbsev+nmw8ZrZRwEPnvuICd7OxvEbTjbAZLPTAWQkqxMAJ9Odg46IszTwwqGMm8hyL21LNYyfKmNl5h6pINpG6io+Fgy1a2g2GXz09DthZOny4xM/gUY4ZnjCd82mSM1laCHYgV2hnt2NFuhBbWPjvz12jkCr5AuGhganyJZqLWQPJFclD7ffagpoIp2QNZ2SVXYy80t2I+BXsilNM68tkbf4SyHXu0U+QPe7Uq5adgr8QYRRP2bIKCGXs3w4Ohwd4ZQ/yYsgNNCIs1pg8bCPmsP/nNbnyMvKoq4fCVjItwd0pkU+ptOxfIrVOqbO8hyuctTnDm09VX3oa/Z6qYyOnsQIaSJMXERSaigo4rW7Idi0r6uCrKpN16Rrfno42R+6aeqK9sEr3KSfXYxDNVieJ/LJNUu+e/q3rx2iGraeTnuBtbvHnL+/shb/mv2J6V9WjOerGNB0YpzS4kuQdwZFm2toR15AU/Csu0du+7c5ZoMckAwEhjSZKvqdrBRZHOok9gdutFyhIDcGrb/41fFiQtP7mY5v66Gc0GDiQ3AJYsc7BhtfCE3zQa+zFyc42kmY/hEcA7yzZ1QfdnjZLvx5pRnmjp/wKRMvCWrCK+0MCxrjsISGa93LNsWR1E1hGNDmQER5CH7OlTGUcBK+zRaKiRWhzeYi1mWVA5pRM0mxXmHT7LDCwqDtjGg9NgGad+4KXx59xW3XXS/ETKFhBUMnHnxoVFWEHkAL9jclXx3xKQVHnDzWXLEnEe5Wcw+xC3sl4cUkH+o83alhQEwbAKbWlia2qpm7WjZVq6s+//dI0IYsWpC7jyQuFn+P1OCBboaPXfAn4oaBoTKojPsmUbKF1ScnqP47w8OxyT0cg1qpVItHFLXjqsKB2k7MtaS9Ym3DYFiCI9Zi4mlOfgfppICMgEJPdHO49qxxkRb8P3Qe6GcYR47LhQ0c4tzwtiXFgn65wCtDKRbEOAlEBH3OHWtNlbGgtk1kIEQx2lLDJyslb6Jj1vUlde8HgeFzz5iL5JKlj71+0zaRY6Z1BwKfNoMZ1TkwrPr6y87ykryLpozSf9oUE8+tjjCQBj5ZcjKGVdKpAtf2znnYWc+Q58+imiYFFJFvgVCK8ETWhfjmrhSH7cniAomPTG6V8yYg6Ms95p6Vp+uUTP04GLlrlw1yLxaw8F9hADnzdjeUj02NRBFyBVzWL5Xv0MK2T4sfHI9GXFHAGbX2k0PUcsiiIMVc6uvR9uKSDgt5xIP3PlZODJLBQ4kAD+qUgbRkyEqQIgqDinoBgBNM7g17Wyr0HYRCtmLU9K67VU2tggF6XqfuiqfZeOEbfDhfemt/w20YofdaOEPWxyvx72gupocQuA5qXC6sMwxHU+SyW35uMc84GU+UjNfChoPtY0H8yaj5bNh+Pm433zFxTmr1jYCo9xUj5JROtpLlpP1A38VCNlk6WDY7qX7AnrwTTlTsaigcG37IGEhRuDeekJ7RfPUL78BwCDfm1dBuGDOgAAAABJRU5ErkJggg==',
  'wechat': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAA5FBMVEUAAAAHwmAIwWAHwmEIw2ESyGcIwWAIwmAIwWEHwmEKxGAKxWFV/6oHwWAHwWEHwmAIwmAIwWEIwmAIwmEIwWIKwmEHwWIJwWEIx2gNzGYzzGYHwWD///8IwmEMwmMfx2/9//1V1ZIYxWsTxGjt+vNq2qA4zYAQw2b4/fuQ5Ljn+fDi+Ozf9+vL8t257tJx26Tq+vKy7M2u68un6ceg58IsyngmyXP0/PjO8t/E8Nl93qxd15fY9ebS9OJl2ZxS1JBAz4Wa5r+L4rRP045M0oxJ0Yrv+/V33ah13aeJ4bOE4LDH8duXUKJXAAAAG3RSTlMA+uzRWg7dw6mOSzQD9/PUyZ2CZGNPRjogFAUdtzlwAAAEE0lEQVRo3s3aaVfaQBQGYLKw1x2r7TszAcIiKpsssojgbtv//3/KsSQi3psESE59PiGec4fM5N6ZzCQWTDxrHqaSRkLXND1hJFOHZjYeC0s8kzYkPpFGOhMPIfpRUgNLSx5t10YmtQMfO6nMptG/mXsIZM/8tkn4XAKBJXJrN3FiYC3GyVrhfxxIrEke/Age/1jHBvTjgOF/prGh9M8g8U/3sbH9U//4WR1b0LN+8b/vYiu7373jmxq2pJme8SW2Jk2P/tEQAo3tpewuQrHLjPSpjpDop2R+7SM0+1TGpRGiNFF/EKrjT/VTR6j01dp6gJAdrMwvEiGTJx/mRwOhM5Zn0Ry8WbNCedQcP/awhtzSBSTAkw+1iXC02s0iAkq8X4IJVrV5KT4668wQzHvV2wOnXBKEjoUg9tz1GxjFtqBd3yIIZ82XAq13Llg1CX+pxfp2h4/PuwrQws6/lfERSNaF8FSDv6O3BpIgNRaB8pPl+6g0OHM+BhiH5FsPaaCMnYgVoCwcXQWr7vzHPyO0OHsPKWcAXpavpqQAVNbopAw70RScKFPM1RZ/DDBnuynnfQnOxGOA0l7+mXLghLSW2s6fF+DHmA+BBMF2hzL/Wux3hKNesQuteUON10pRwp+Mx7KgVISHm1sFWbSVKsJXNmYyQ8C6HMu52e+r4c3FoHFXsH0K3iEoTT6DbYVe91q48o0n8A6ZQjQStHwZyurkV76tz8BJMXlcFrRbyGmJaPeXZHPZAOVJkF4gmWsb2tx9mgClmCf7H4odnGEVlERMB2lITTNWdZoXnDYoekxD4EF4kVWvEj4GQeMaUJ9DXdvVe6foPdgPJWd+thaJ3iqSDeigjakReF58bLqp0lKAajnfUl2UAONOrCjYU/ejm+wTzE2cWksNsgGGGqw0YNldd0DdepuvABVn5PvUbZoEp3/5MZmkHL7nbq3ujMzdnVs3HqlES4Fl1T8UOeBSeCtTpeIQvOqVeDcBnoW3EVXsTHhQZ8LVAm7WvwIzloWHB7FEoSG8zagJJy7B6751/vDfdfScPOM8K2rKjBlgqXm2XpQVqk+jbrtRQEV4uifuUu/n40fRelVw+QzCmUUvWzJg1UZVcqoOvljNOEtHmiIWrKw/ilk6ErnM67NL+nOLmjC55TuvV2LiV0A4Yh9AeBVyzrnpezyAkOWIV1yuH94r+RT7EOhtWv+0bLFAyTCPsf6eum5HXXTq3Hy8RzyIB9crlH//Kj/2Adyeiy4IJrGVsBn7/hLkVoIrhy31iWVXLvLtnKg3pKLeUot8UzDqbc2oN2Yj31qOenM86u39qA8ooj5iifqQKOpjrqgP6v7/UeN2h6Vf47h34wPrr3TkvsFLA1/vtYc1Xtz4yq+ehPDyTOSv//wFKf0TV2KWp7YAAAAASUVORK5CYII=',
  'poster': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAqFBMVEUAAADz9Pbz8/X09Pf////////z9PXz9PXz9Pbz9Pb19fjz9Pby8/by9Pby8/by9Pby8/bz8/by9PXz8/Xy9ffy9ffy9fX09Pj29vb19fX19fX39/fy///y8/VkZWZyc3TLzM3c3uDCxMWKi4xub3Dh4uRoaWrV19lrbGzs7e/n6OmEhYXw8fOnqKqOj5F6e3zHyMq7vL2bnZ7R0tTCw8SxsrOfoaGXl5kWOEU7AAAAHXRSTlMA+uxaDgPT0KmOS/fz39vJxcGdgmRjT0Y6NTQgFFatTPIAAALJSURBVGjetNXZbuowFIXhZcfOxDwPZZnocKjoqKrq+z9boUIVtDXZGOe78U3iX1G2bMiYZTLK+2lHK6U7aT8fJUuDWExZZPxDVpQRImY8UPRSg/FtjTJvsUYrLxHIJilF0sSGbD/pUqw7uToxz3iVbI5rrIa82nAFsalmAD2FjC0YqLAQuOsxWO8OtRaaN9AL1Ji1eZP2DBclijdSycX9GcGFwkwxAjWDx6LNKNoLz3xqRqL/nFbbYzQ9i98KRlTglymjmuKHlWZUeoVzQ0Y2xJk5o5vjhM0YXXY6SRM2YIJvtssGdK3gjIt06qVsRIqjkg0pj4GcHtXaCazf6JHji2nRY+1E1vRoGRyM6eOE6DPGwaC5wAB7Rl0M0EP0jDIASkYJ+OeoaDJQAMiaDGSAEby83ew226AADZaCwGa/bsICSySCwG6/7njm4UEWSDAK+4L3d1lghDzoH3w49yEK5OiHTMj2v3O7rSTQRxoQeH5ye0/PgkCKTkDgxX15EQQ60JJA9Y8nKndU1Qc0lCBQ3buTwuPhmnh9PVwEj7UB9dms2ewgCANB+OAFz54LNv4gGi2VoO//ZqYrretpLGRiuRASMl/Sv+3OLgaIfq0Ib2nB7DAAD5HoK8I4Dc4Q3iMcIjjJoq8Ibfi8pqke0CTDZSr6+yYSOicLNC1Wh5Yp3Gii39pIeIbPw2e71XCjVQAg+sZMBK9nw/QYUIHDLupHQjhX7yY9DwjYgOM66QtBHtepQ9shwAoFHNHXhKPVf9gTCjgwZIq+IvjvXzwKmRlBXwi3zKCfeW2xl3MeYE2/eNGvjuzLL/36Tk9AQArV/0RotiCFIiaB7DSWnojTrQS2GUK3c9iGFNtSo5uCbFuTbczSrWW2Oc6299kFCnaJhV0kYpe52IW6/5calxVLyyj3zi5Yl1Ryn9E0UF7bQ0bjRsmtJ/zmmeXtPy+R2DWBaC0HQgAAAABJRU5ErkJggg==',
  'qrcode': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAQlBMVEUAAAD19fft7vDz8/bz9Pfz8/X7///y9PXy9PXz9Pb39/fy8/VkZWaAgYK/wcJub3Db3N2am5zT1NaIiYrMzc6sra9g2AGKAAAAC3RSTlMAQv7KXu4P2KWKIKWgE6gAAAKKSURBVGjezZrdlqsgDIX5FeguiqLv/6qn9kzLWFtQatb4XeaCvUhihAS2jYYrZ6UxGkIbI61TvGFH0XAn8QbpjhBplEQGqb7T4FaggLCc1aIMNmEU3fL1ElxiF5LvC63FbuyOcHONCvTmTThU4tgWLhLVyAuVe5KbaNcvKyh8jSqsT6rAcQi87H+aOFw0DkK/z1aJw5CF7/d7XCHABIFuNA5Fv9ZWi4OxGQdROEnicGShRBxbMgwIMMQbANSGDYztgjDbwtI2ZLZQSiERr0u6EWivL/TFRLL4wHh9JQJ+ZQyFb6ER+EC7WssD3cr40UmiKYR4FvD9g5gE+ifdLFAIs8wKJA+HJJD2HLMC8u4h0Alg9hGnEUh55CgF3BwCSgE5h4BSAA3jtAKcKVoBxRytgGO2IBDDgzYJDE+jLwjYexIR1KKURmaXQDxWIKzWmoD+1daJ7H9TI8MQ/W/iJADR+wV9QAbNQAwTIEXkXdT6bkEvAExP4wD42ZZB7wxyD0yL9OnmzMpgdqapB/yrwDXkBL760EagK30HxVLRiwdDEoj/jwBT25YEbF2xG9OZqVjsFK2AYpxWgLOmUmCITwKy5xZZI7DnmuMoBdxNgNcJiGkKs3GaROEm2NQJxPuPQHSzLReCG7JGQFxvtBiz9wPIDcf3Lj7wT4FUI0L+j6ZqLyBzmvquvRd0/znioilcoYZ35brfnkW2cAlc/+C7AIi4WYCXr7Fh+E0QP0aBLRjyizh1K4G8GULdzqFvSNG31OibgvRtTfrGLH1rmb45Tt/epx9QlErG2YY4at+Y62yDNM3/ftT41bD0LOPe2oH1mUbu6dHAKd4lGHXWhxvbnp6c/fHM6vkPdj7/+Qe56z6vqteB0gAAAABJRU5ErkJggg==',
  'mini-program': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAzFBMVEUAAADz9Pb09Pf////////z9PXz9PXz8/bz9Pby9ff19fjy8/Xy9Pbz9Pby8/bz8/Xy9Pby8/by9Pby9PXz8/Xy9fX09Pj29vb19fX19fX39/fy///z9Pby8/Xy8/VkZWZtbm/Nzs/q6+3d3+GEhYbw8fO1trfQ0NJmZ2iRk5Tb3N3s7e/h4uTDxMaytLV/gIJ6envAwsPR0tWYmJp6fH3P0NG9v8GhoqOIiYp0dXaOjpC7vL3n6Oqtrq+lp6ibnJ7GxsiHiYmUlZeBgoKtqUcNAAAAHnRSTlMA+loOA9PQw6ljS+yO9/Pr39vJnYJPRjo1NCAUj+3POlmyAAADrElEQVRo3qzSxQHEMBADwLXjMDM4Uf9l3jsXMuwUID0kMhOsckjisMmFyJswTga5BsQlyIoIN6IiCxjS01jgkYhTv44sKfGhTDJypGQII6FULvFpC2Ntal0xR7ASzWRD97DWazI2HnCQj2RGFXBUGC2xdXDWbfRpqeGhXujDVMFLNdErKeBJyNd8MHhpmAQYiOlx3wosqoeltxpM6o1uqA5sOkVXOxjtdDGC1Uh/9AFWuaazHsx6OpnBbj496MdanewmDANhAA6iULpJrdQLl984JnvCEsJWKND3f6l6EyUo44DU7xRFiseeGU/6+Hf9y056wi0yEc0nk3kkMtzi6eIAH2iVh5uYWfEmzNHq4+GOGVdM2ZVpccfU68EtGrMG4whuPc96hpOfMELiw+nZMwZwERUzRovVUvi+WK4WI2ZUAi4DT+u+wYHbxRIe4CzgiQ3K4fDWbe9RHpt8l7hSmrrEvL1TH0ETZv8hGoTmDAK0R52hDkh+ZfLgyl7lg9TptvRQotdPURekBU8DAKmOkLT00StIEVM4avK1Lsv2ew9wpkQgvcoAfZDGDfkvYmZtU1uHMUh9WQKQioavT3Z9kzu7hwKkrjcESc+fsp7+rQ56OHzZ4KWeSyANHYMub6jgTm08Ol+Q1PZB7hh4n6CEDRU+/hXlIB93ts4hKJ+OQbRRuw1Q8yPfCUhm5QkQqFbdgDKg73GmcrBA3Uy+y6AV5gRYqIGR0Xe5B4Jg0ooMsK9MDbBikqD/Ce/OW7ZsCOBDKme2e7B03rV37wWE+eXO0iSe5RcB1kw5nU86B+HF64AwYXoxJTsy6XgOYAfpGorPdLUJnd9mrWAFYRiGXrzpH0zqGCtKhYF4GKuboP7/P2lr6cjpxbGHfbftsI40eUleojmgadP38gFTeJ6s5gCNiZ6RFzo7H9D0/u7MFw6YCF1y+sK1kV6UgC8Zu2k0eGtnLxKxh90UB1oX7J1eBq4zAjDQMFVcssNEXqiNAKIKTHaRVYcmX/zDCCCyg3SdEpsfA/3UiX8yMF3jhJN+svZ+iMlF3DFOOKqU2R8yBukvOGWqkr7NJ7ykMXDS15YtR38KprgJ+2jKFn3hdXZuNAKqwoteOrKLX3r5Tm9A2C0UvQlkt7H0RpwuJbDFELqcwxak6JKaRLU1q2JbsWVNsjC7o0vLbHGcLe+zBxTsEQt7SMQec7EHdf8fNX4ibnFM7zdljHsXD6xLGrkvWBoob+3hh8WNkldPVlieoa//vAGPUmBY/mbIawAAAABJRU5ErkJggg==',
  'wechat-moments': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAyVBMVEUAAAB8yUV8ykWD0E2K7GN7yUZ7yUV8yUZ8yUZ8ykd+ykZ7yUV7yUZ7yEZ7yEZ7yUV8yUZ8yUZ7yUV8yUV8yUZ8yEd8ykh+ykZ7zEh9zEaAyUqAy0uGzkn///97yEX////b8M2r3Imt3Yyq24iS0mb0+u/o9d77/fny+e2V02r1+/GAykzL6ba54pyz35SP0GL3/PSh2HvU7cLP67yNz16Kzlrr9+O946Kw3o/v+Omo2oSY1G7G566Ey1HC5qqd1nTW7sbi8tbd8c/AL+m9AAAAHnRSTlMA01wOBPnszpBlSvz07t/dxcKqqaCCUk08NzQiFQF2GmbLAAAECElEQVRo3qzVVxKEIBBFUUEJYs757X+Z8z0WKqHPAm5X2QKJm3Tn09CyWgoha9YOE9/ThEq6aAULpZeUoJ53BR4VXR414zK9wAfRmyswn3EGJ4xnIfm8gbMm9x6xMnhhq1f+HOFtPN37c4UA1ez69TUCaadNHArB1PHd3yQiyO2rb0pEKc17nwtEEvy1DwIvE4wAAWEe91uCRPmw6UOCiDys50uBjLKdOA1C2nL/gNR8758VSFX3u3UEsfH2voDc+vcH/Sgr29WEgSCKrtgWSqGtigiC95pETTQ1aqLxq2rp+z9UaVjrrmay9vwduCfZGWZqcBIvpukoCsNh/n0MlnBSMyfpGS4WaUiTPpw8Gz/guO/jBfZzWozgpwNU8vZw5447fJAexpMrwYbMDvdtvV5lB05bUhvsPyAZnSq70DsvUVSQ6EQfg+GNgFyjgvNabULmkzQMtwJmkGmqgvqjO982aIHT8Fh3zWhCkw1m0a2Aa9ekNiCxDykYTAF3kGgUL/QCgTgnrw3L7Vng8cxkBYGX3zfqOBpgkWiDJeAXJDpVh2YZUjTYAi6qDo94KTOy1LDa3gh88XYqVYeEr/EKggLP82Os8itBApG66uL/rHJLkGAvvlFXXnRZ3yaLTcMIwWW0xvNUXnht6StpE82saorAyGcYo5y2agmVnZCviREY+fIctdS7UDlK+Rot8PUan6KcdyXdgr4jH4FegEU+pSbU1KtQyXlhWJIPz8znCOW8qiehEln5canA+8tnhHKelHQMQjM/8csEnnEgQukk/NBmNrsNwkAQVqReeu6tBy8kgEHUERB+Wgikff+XquTS2sWMNzl4L9zmkwDvzo55QJqIM8U7gJPW5wD4FRl9RXuA0tanFL0i+JGztddrfToJt2x96tFHhr9pY/QNAOljp3eAB01p/UI/DQDp04IOGmwVtdHXgBLoM3P5BTa7UlJViIF+AZfWp08dana4XTer/gqIPizC3Gx7OWzXeODUk9GnWESkCY/Wq2dkan0LQHkruuPf8NR11PU+4pHpGfpn+g/QTfWN9mqAQ99nW24OABGqGdoWr/G6OABKdwkKGy+vdZxzB0Bp4hK+BLaOfvNbW84qIkSoWmx+Wfu+BejjvSGMjH1nFhADAATFLCDMCrW4AKomizAwKxS/BEoDcAky5pZAfo1NMgdA1e2H0E/8Gssv4uUgtwCSmnAtmUX83ihhvsYbAMlaqEIwUQIMQ/h1RH6OgqvnB+OcblyiPpcyzxpVl4Ktw1PoQCp0pBY8FAwda4YOZoNHy6HD8dDxfvALivBXLJjwPW6K3c9E62kuWk/UDfxUI2WTpYNjupfsCevBNOVOxqKBwbfsgZSFG4N36QkdFs9QvvwHAKAPZKV4FLndAAAAAElFTkSuQmCC'
};

var _createNamespace = (0, _utils.createNamespace)('share-sheet'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var _default2 = createComponent({
  props: (0, _extends2.default)({}, _popup.popupMixinProps, {
    title: String,
    duration: String,
    cancelText: String,
    description: String,
    getContainer: [String, Function],
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnPopstate: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  }),
  methods: {
    onCancel: function onCancel() {
      this.toggle(false);
      this.$emit('cancel');
    },
    onSelect: function onSelect(option, index) {
      this.$emit('select', option, index);
    },
    toggle: function toggle(val) {
      this.$emit('input', val);
    },
    getIconURL: function getIconURL(icon) {
      if (PRESET_ICONS[icon]) {
        return PRESET_ICONS[icon];
      }

      return icon;
    },
    genHeader: function genHeader() {
      var h = this.$createElement;
      var title = this.slots('title') || this.title;
      var description = this.slots('description') || this.description;

      if (!title && !description) {
        return;
      }

      return h("div", {
        "class": bem('header')
      }, [title && h("h2", {
        "class": bem('title')
      }, [title]), description && h("span", {
        "class": bem('description')
      }, [description])]);
    },
    genOptions: function genOptions(options, showBorder) {
      var _this = this;

      var h = this.$createElement;
      return h("div", {
        "class": bem('options', {
          border: showBorder
        })
      }, [options.map(function (option, index) {
        return h("div", {
          "attrs": {
            "role": "button",
            "tabindex": "0"
          },
          "class": [bem('option'), option.className],
          "on": {
            "click": function click() {
              _this.onSelect(option, index);
            }
          }
        }, [h("img", {
          "attrs": {
            "src": _this.getIconURL(option.icon)
          },
          "class": bem('icon')
        }), option.name && h("span", {
          "class": bem('name')
        }, [option.name]), option.description && h("span", {
          "class": bem('option-description')
        }, [option.description])]);
      })]);
    },
    genRows: function genRows() {
      var _this2 = this;

      var options = this.options;

      if (Array.isArray(options[0])) {
        return options.map(function (item, index) {
          return _this2.genOptions(item, index !== 0);
        });
      }

      return this.genOptions(options);
    },
    genCancelText: function genCancelText() {
      var _this$cancelText;

      var h = this.$createElement;
      var cancelText = (_this$cancelText = this.cancelText) !== null && _this$cancelText !== void 0 ? _this$cancelText : t('cancel');

      if (cancelText) {
        return h("button", {
          "attrs": {
            "type": "button"
          },
          "class": bem('cancel'),
          "on": {
            "click": this.onCancel
          }
        }, [cancelText]);
      }
    },
    onClickOverlay: function onClickOverlay() {
      this.$emit('click-overlay');
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(_popup2.default, {
      "attrs": {
        "round": true,
        "value": this.value,
        "position": "bottom",
        "overlay": this.overlay,
        "duration": this.duration,
        "lazyRender": this.lazyRender,
        "lockScroll": this.lockScroll,
        "getContainer": this.getContainer,
        "closeOnPopstate": this.closeOnPopstate,
        "closeOnClickOverlay": this.closeOnClickOverlay,
        "safeAreaInsetBottom": this.safeAreaInsetBottom
      },
      "class": bem(),
      "on": {
        "input": this.toggle,
        "click-overlay": this.onClickOverlay
      }
    }, [this.genHeader(), this.genRows(), this.genCancelText()]);
  }
});

exports.default = _default2;