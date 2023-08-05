module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'no-console': 'off',
    // 禁止未使用过的变量
    'no-unused-vars': 'error',
    // 禁止使用未定义的变量
    'no-undef': 'off',
    // 禁止使用debugger (production禁用，development关闭校验)
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 可以使用v-html
    'vue/no-v-html': 'off',
    // 强制执行属性执行顺序
    'vue/attributes-order': 'error',
    'vue/name-property-casing': ['error'],
    // 'vue/component-name-in-template-casing': [ 'error', 'kebab-case' ],
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 'error',
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 'error',
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'error',
    // 禁止出现空语句块
    'no-empty': 'error',
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 'error',
    // 要求 switch 语句中有 default 分支
    'default-case': 'error',
    // 禁止出现空函数
    'no-empty-function': 'error',
    // 禁止 case 语句落空
    'no-fallthrough': 'error',
    // 禁止不规则的浮点小数  例如：.5 / -.7 / 3.
    'no-floating-decimal': 'error',
    // 禁止 this 关键字在类或类对象之外出现
    'no-invalid-this': 'off',
    // 禁止使用迭代器
    'no-iterator': 'error',
    // 禁用标签语句
    'no-labels': 'error',
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'error',
    // 禁止循环中存在函数
    'no-loop-func': 'error',
    // 禁止使用魔术数字 warn
    'no-magic-numbers': 'off',
    // 禁止出现多个空格(忽略行尾注释前的多个空格和对象中的属性)
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true
        }
      }
    ],
    // 禁止多行字符串
    'no-multi-str': 'error',
    // 禁止直接使用 new 正确代码示例： var thing = new Thing();
    // 'no-new': 'error',
    // 禁用Function构造函数
    'no-new-func': 'error',
    // 禁止原始包装实例 包括：String、Number 和 Boolean
    'no-new-wrappers': 'error',
    // 禁用八进制字面量
    'no-octal': 'error',
    // 禁止在字符串字面量中使用八进制转义序列 应使用unicode字符集
    'no-octal-escape': 'error',
    // 禁止对函数参数再赋值
    'no-param-reassign': 'error',
    // 禁用__proto__
    'no-proto': 'off',
    // 禁止重新声明变量
    'no-redeclare': 'error',
    // 禁止使用对象的某些属性
    'no-restricted-properties': 'off',
    // 禁止在返回语句中赋值
    'no-return-assign': [ 'error', 'always' ],
    // 禁用return await
    'no-return-await': 'error',
    // 禁用Script URL
    'no-script-url': 'error',
    // 禁止自我赋值
    'no-self-assign': 'error',
    // 禁止自身比较
    'no-self-compare': 'error',
    // 禁止逗号操作符
    'no-sequences': 'error',
    // 限制可以被抛出的异常，只可以抛出new Error
    'no-throw-literal': 'error',
    // 禁用一成不变的循环条件，避免死循环
    'no-unmodified-loop-condition': 'error',
    // 禁止未使用过的表达式
    'no-unused-expressions': 'error',
    // 禁止未使用过的标签
    'no-unused-labels': 'error',
    // 禁止不必要的.call()和.apply()
    'no-useless-call': 'error',
    // 禁止没有必要的字符拼接
    'no-useless-concat': 'error',
    // 禁用不必要的转义
    'no-useless-escape': 'error',
    // 禁止多余的 return 语句
    'no-useless-return': 'error',
    // 禁止使用void操作符
    'no-void': 'error',
    // 禁用警告注释
    'no-warning-comments': 'error',
    // 禁用 with 语句
    'no-with': 'error',
    // 要求必须有基数 举例说明：parseInt('071', 10);
    radix: 'error',
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'error',
    // 要求将变量声明放在它们作用域的顶部warn
    'vars-on-top': 'off',
    // 要求或禁止使用严格模式指令
    // strict: [ 'error', 'never' ],

    /*
     *变量声明篇
     */
    // 禁止删除变量
    'no-delete-var': 'error',
    // 禁用与变量同名的标签
    'no-label-var': 'error',
    // 禁止变量声明覆盖外层作用域的变量
    'no-shadow': 'error',
    // 关键字不能被遮蔽
    'no-shadow-restricted-names': 'error',
    // 不允许初始化变量值为 undefined
    'no-undef-init': 'error',
    // 不允许使用undefined变量
    'no-undefined': 'error',
    // 禁止定义前使用
    'no-use-before-define': 'error',

    /* 代码风格篇 */
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': [ 'error', 'consistent' ],

    /*
     * 强制在括号内使用空格，在第一个元素前、最后一个元素后、每个元素后都要有空格,例如：[ 'a', 'b' ]
     * 例外情况：数组中只有一个元素时，前后都不加空格
     * 第一个元素为Object/Array时，前面不加空格
     * 最后一个元素为Object/Array时，后面不加空格
     */
    'array-bracket-spacing': [
      'error',
      'always',
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    // 强制数组元素间出现换行，数组中所有元素使用统一的换行符
    'array-element-newline': 'off',
    // 在代码块中开括号前和闭括号后有空格
    'block-spacing': 'error',

    /*
     * 大括号风格要求：
     * 1. 开括号前要有空格
     * 2. 闭括号后要有空格
     * 3. 禁止出现单行函数，例如：function(e) { console.log(e); }
     */
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false
      }
    ],
    // 驼峰拼写法
    camelcase: 'error',
    // 忽略注释首字母大小写的校验
    'capitalized-comments': 'off',
    // 禁用拖尾逗号
    'comma-dangle': [ 'error', 'never' ],
    // 逗号前不允许有空格，逗号后必须有空格
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // 逗号不能在行首
    'comma-style': [ 'error', 'last' ],
    // 禁止在计算属性内使用空格 计算属性：指Object中的属性，例如obj['a']
    'computed-property-spacing': [ 'error', 'never' ],
    // 文件末尾保留1行空行
    'eol-last': [ 'error', 'always' ],
    // 禁止在函数标识符和其调用之间有空格
    'func-call-spacing': [ 'error', 'never' ],
    // 忽略校验函数名与赋值给它们的变量名或属性名是否相匹配
    'func-name-matching': 'off',
    // 函数名称必须有，可以用变量定义
    'func-names': [ 'error', 'as-needed' ],
    // 忽略校验函数声明的方式
    'func-style': 'off',
    // 当函数的入参达到5个时，允许换行
    'function-paren-newline': [
      'error',
      {
        minItems: 5
      }
    ],
    // 箭头函数的函数体前面不用换行
    'implicit-arrow-linebreak': [ 'error', 'beside' ],
    // 缩进2个空格(不能用tab)
    indent: [ 'error', 2, { SwitchCase: 1 } ],
    // JSX中属性的值需要用双引号
    'jsx-quotes': [ 'error', 'prefer-double' ],
    // 对象的键和值之间，冒号前不能有空格，冒号后必须仅有一个空格
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    // 关键字前后都要有一个空格
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 单行注释只能在行的上方，不能在行尾
    'line-comment-position': [ 'error', 'above' ],

    /*
     *换行符统一使用unix风格，即\n
     * 'linebreak-style': [ 'error', 'unix' ],
     *块注释前要有一行空行，块注释后不能有空行
     */
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false
      }
    ],
    // 在类成员之间必须有一行空行（单行可没有）
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    // 每行代码只能有一条语句
    'max-statements-per-line': [
      'error',
      {
        max: 1
      }
    ],
    // 多行注释只能使用块注释，并且每行前面都要加*[ 'error', 'starred-block' ]
    'multiline-comment-style': 'off',
    // 三元运算符禁止换行
    'multiline-ternary': [ 'error', 'never' ],
    // 构造函数首字母大写
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    // 调用无参构造函数时必须带括号
    'new-parens': ['error'],
    // 方法链中每个调用都有一个换行符
    'newline-per-chained-call': 'error',
    // 禁止使用内联注释(代码后的单行注释)
    'no-inline-comments': 'error',
    // 禁止 if 语句作为唯一语句出现在 else 语句块中，应使用else if替代
    'no-lonely-if': 'error',
    // 禁止混合使用不同的操作符，如有需要，必须加括号
    'no-mixed-operators': [
      'error',
      {
        groups: [
          // 算数运算符
          [ '+', '-', '*', '/', '%', '**' ],
          // 位运算符
          [ '&', '|', '^', '~', '<<', '>>', '>>>' ],
          // 比较运算符
          [ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
          // 逻辑运算符
          [ '&&', '||' ],
          // 关系运算符
          [ 'in', 'instanceof' ]
        ],
        allowSamePrecedence: true
      }
    ],
    // 禁止混用tab和空格
    'no-mixed-spaces-and-tabs': 'error',
    // 禁止连续赋值
    'no-multi-assign': 'error',
    // 不允许有连续空行
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 1
      }
    ],

    /*
     * 禁用嵌套的三元表达式
     * 'no-nested-ternary': 'error',
     * 禁用Tabs
     */
    'no-tabs': 'error',
    // 行尾不能有空格
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
        ignoreComments: false
      }
    ],
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',
    // 单行语句前必须要换行（指if / switch / while / for / do / ）
    'nonblock-statement-body-position': [ 'error', 'below' ],
    // 在花括号内使用一致的换行符
    'object-curly-newline': [
      'error',
      {
        consistent: true
      }
    ],
    // 对象的花括号里必须有空格
    'object-curly-spacing': [ 'error', 'always' ],
    // 对象的属性不能在同一行
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false
      }
    ],
    // 每个作用域允许出现多个变量声明，但对连续的变量声明要求合并为单个声明'one-var': [ 'error', 'consecutive' ],
    // 尽可能地简化赋值操作，例如 x = x + 4，简化为 x += 4 warn
    'operator-assignment': [ 'off', 'always' ],
    // 出现换行时，操作符不能放在行首
    'operator-linebreak': [ 'error', 'after' ],
    // 块语句开始和结束，禁止添加空行
    'padded-blocks': [ 'error', 'never' ],

    /*
     * 语句中空行的要求：
     * 1. import 和 export default 语句之间要有一行空行
     * 2. require 和 module.exports 语句之间要有一空行
     * 3. 变量定义语句后要有一行空行
     * 4. return 语句前要有一行空行
     */
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'import',
        next: 'export'
      },
      {
        blankLine: 'always',
        prev: 'cjs-import',
        next: 'cjs-export'
      },
      {
        blankLine: 'always',
        prev: 'var',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'let',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'const',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    
    /*
     * 对象的属性名称，非必要时可以不使用引号
     * 1. 属性为关键字时，必须使用引号
     * 2. 属性为数字时，必须使用引号
     * 3. 属性带有特殊字符，例如 运算符 / - / ...
     */
    'quote-props': [ 'error', 'as-needed' ],
    // 默认使用单引号，当单引号不满足需求时，也可以使用 `
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    // 语句结尾禁止使用分号
    semi: [ 'error', 'never' ],
    // 语句块之前必须有空格
    'space-before-blocks': [ 'error', 'always' ],
    // 函数圆括号前不能有空格
    'space-before-function-paren': [ 'error', 'always' ],
    // 圆括号的开始和结尾不能有空格
    'space-in-parens': [ 'error', 'never' ],
    // 操作符周围要添加一个空格
    'space-infix-ops': [
      'error',
      {
        int32Hint: false
      }
    ],
    // 单词类一元操作符前后要添加一个空格；非单词类一元操作符，前后都不能有空格
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    // Switch语句，冒号前无空格，冒号后有空格
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    // 模板标记和它们的字面量之间要有一个空格
    'template-tag-spacing': [ 'error', 'always' ],

    /* ES6 语法篇 */
    // 箭头函数函数体必须使用大括号
    'arrow-body-style': [ 'error', 'always' ],
    // 箭头函数单个参数是不适用圆括弧，多个参数时必须使用圆括弧
    'arrow-parens': [ 'error', 'as-needed' ],
    // 箭头函数箭头左右分别只能存在一个空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 是否检测构造函数中 super() 的调用 -- 关闭状态
    'constructor-super': 'off',
    // generator 函数中 * 号周围有一个空格
    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: false
      }
    ],
    // 不能修改类声明的变量， 错误示例：class A {}  A = 0;  正确示例： let A = class A {} A = 0;
    'no-class-assign': 'error',
    // 不允许在比较操作符混淆的地方使用箭头函数
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],
    // 禁止修改const 变量;
    'no-const-assign': 'error',
    // 不允许类成员中有重复的名称
    'no-dupe-class-members': 'error',
    // 禁止重复导入
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true
      }
    ],
    // 禁止在调用super()之前使用this
    'no-this-before-super': 'error',
    // 禁止在对象中使用计算属性
    'no-useless-computed-key': 'error',
    // 禁止声明无必要的构造函数
    'no-useless-constructor': 'error',
    // 要求使用let或者const 禁止使用var
    'no-var': 'error',
    // 要求使用剩余参数代替 arguments
    'prefer-rest-params': 'error',
    // 强制剩余和扩展运算符及其表达式不存在空格
    'rest-spread-spacing': 'error',
    // 禁止模板字符串中出现空格 正确案例：`hello, ${people.name}!`
    'template-curly-spacing': [ 'error', 'never' ],
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [ 'error', 'both' ],

    /* vue/recommended 篇 */
    // watch监听必须使用箭头函数
    'vue/no-arrow-functions-in-watch': 'off',
    // computed 中不能使用异步函数
    'vue/no-async-in-computed-properties': 'error',
    // props / computed / data / methods 中命名不允许重复
    'vue/no-dupe-keys': 'error',
    // 同一组 判断语句中 v-else-if 的判断条件不能相同
    // 'vue/no-dupe-v-else-if': 'error',
    // 禁止重复属性
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: true
      }
    ],
    // 不允许修改props的值
    // 'vue/no-mutating-props': 'error',
    // 禁止命名为关键字
    'vue/no-reserved-keys': 'error',
    // 组件中的data必须是一个函数
    'vue/no-shared-component-data': 'error',
    // computed属性中 禁止对data中的数据进行赋值
    'vue/no-side-effects-in-computed-properties': 'error',
    // template 不允许绑定空的key
    'vue/no-template-key': 'error',
    // textarea标签绑定数据应该使用v-model进行绑定
    'vue/no-textarea-mustache': 'error',
    // 禁止注册未使用过的组件
    'vue/no-unused-components': 'off',
    // 禁止在v-for模块内使用未定义的变量
    'vue/no-unused-vars': 'error',
    // 禁止在同一元素上面同时使用v-if v-for
    'vue/no-use-v-if-with-v-for': 'error',
    // render函数必须要有返回值
    'vue/require-render-return': 'error',
    // v-for 必须绑定key
    'vue/require-v-for-key': 'error',
    // props 必须存在有效的默认值
    'vue/require-valid-default-prop': 'error',
    // computed 必须存在有效的返回值
    'vue/return-in-computed-property': 'error',
    // v-bind 必须绑定一个有效的值
    'vue/valid-v-bind': 'error',
    // v-if必须是合理的，必须v-if开始，不能v-else-if开始
    'vue/valid-v-else-if': 'error',
    // v-if必须是合理的，必须v-if开始，不能v-else开始
    'vue/valid-v-else': 'error',

    /*
     * v-for 校验规则
     * v-for 不能带有任何前缀或者后缀
     * v-for 必须存在值 来源： props, computed, data
     * 必须存在key
     */
    'vue/valid-v-for': 'error',

    /*
     * v-html 校验规则
     * v-html 不能带有任何前缀或者后缀
     * v-html 必须存在值 来源： props, computed, data
     */
    'vue/valid-v-html': 'error',

    /*
     * v-if 校验规则
     * v-if 不能带有任何前缀或者后缀
     * v-if 必须有值 来源： props， computed, data, methods(必须存在返回值，否则默认false), 或者为其他的表达式。
     * 同一个标签上只能存在一个v-if 并且不能有 v-else, v-else-if
     */
    'vue/valid-v-if': 'error',

    /*
     * v-model 校验规则
     * 不能只存在一个v-model属性，不能添加任何前缀或者后缀。
     * v-model 必须有一个合理的值 存在于 computed, props, data 中。
     * 必须存在有数据交互的标签上面 例如: input, select, checkbox, textarea。不能存在于展示的标签上，例如: div, p, span, i 等
     * 不能用于循环的迭代器中。
     * 当input 标签的 type属性等于 "file" 的情况下不能使用v-model
     */
    'vue/valid-v-model': 'error',

    /*
     * v-on 校验规则
     * v-on 不能带有任何前缀或者后缀
     * v-on 必须绑定事件
     */
    'vue/valid-v-on': 'error',

    /*
     * v-once 校验规则
     * v-once 不能带有任何前缀或者后缀
     * v-once 不能存在任何值
     */
    'vue/valid-v-once': 'error',

    /*
     * v-pre 校验规则
     * v-pre 不能带有任何前缀或者后缀
     * v-pre 不能存在任何值
     */
    'vue/valid-v-pre': 'error',

    /*
     * v-show 校验规则
     * v-show 不能带有任何前缀或者后缀
     * v-show 必须存在值
     */
    'vue/valid-v-show': 'error',

    /*
     * v-slot的校验规则
     * 只有自定义的组件才存在v-slot
     * 一个标签内只能存在一个 v-slot
     * 自定义组件不能直接使用 v-slot
     * 在一个自定义组件中，同一个slot只能出现一次
     * v-slot动态参数不能有值，例如 <my-component> <templte v-slot:[data]></templte> </my-component>
     * 自定义组件上直接使用v-slot，必须有值，例如 <my-component v-slot="default"></my-component>
     */
    // 'vue/valid-v-slot': 'error',

    /*
     * v-text 校验规则
     * v-text 不能带有任何前缀或者后缀
     * v-text 必须存在值
     */
    'vue/valid-v-text': 'error',
    // v-model 前后不能存在任何修饰符
    // 'vue/no-custom-modifiers-on-v-model': 'error',
    // template 必须存在有效的单个元素'
    // 'vue/no-multiple-template-root': 'error',
    // template 在使用v-for的是都不能存在key
    // 'vue/no-v-for-template-key': 'error',
    // v-model 不能存在任何前缀或者后缀
    // 'vue/no-v-model-argument': 'error',
    // 属性命名样式必须使用 中杠 -
    'vue/attribute-hyphenation': 'error',
    // 组件名称命名使用大驼峰
    // 'vue/component-definition-name-casing': 'error',
    // html标签 如果为单行则不需要在 > 之前换行， 如果是多行的需要在 > 之前换行
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    // html 标签必须关闭
    'vue/html-end-tags': 'error',
    // html 属性值必须使用双引号
    'vue/html-quotes': 'error',
    // html 插入属性值是前后只能有个空格 {{ text }}
    'vue/mustache-interpolation-spacing': 'error',
    // html 属性 不允许 等号周围有空格
    // 'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    // 每一个文件内只能存在一个组件
    // 'vue/one-component-per-file': 'error',
    // props 必须存在默认值
    'vue/require-default-prop': 'error',
    // props 内的值必须指定type
    'vue/require-prop-types': 'error',
    // 在打开的标签或者关闭的标签之前强制换行
    // 'vue/block-tag-newline': 'error',
    // 在新的属性之间需要换行
    'vue/new-line-between-multi-line-property': 'off',
    // 不允许存在空的template块
    'vue/no-empty-component-block': 'off',
    // 组件名称不能使用html关键字以及vue2,vue3
    // 'vue/no-reserved-component-names': [
    //   'error',
    //   {
    //     disallowVueBuiltInComponents: false,
    //     disallowVue3BuiltInComponents: false
    //   }
    // ],
    // 禁止使用内联样式
    // 'vue/no-static-inline-styles': 'error',
    // 禁止使用未在components 中注册的组件
    // 'vue/no-unregistered-components': [
    //   'error',
    //   {
    //     ignorePatterns: ['goose(\\-\\w+)+']
    //   }
    // ],
    // props 内禁止定义未使用的属性
    // 'vue/no-unused-properties': 'error',
    // 标签与标签空之间需要空行 并且只能一个空行
    // 'vue/padding-line-between-blocks': 'error',
    // 点击事件执行function 不带参数不需要加括号 带参数的加括号
    // 'vue/v-on-function-call': [
    //   'error',
    //   'never',
    //   {
    //     ignoreIncludesComment: true
    //   }
    // ],
    // 动态组件必须有:is或者v-bind:is指令
    'vue/require-component-is': 'off',
    'vue/no-lone-template': 'off'
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2019,
    sourceType: 'module'
  }
}
