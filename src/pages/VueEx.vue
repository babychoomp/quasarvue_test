<template class="q-pa-md q-gutter-md">
  <!--텍스트 보간법-->
  <q-card-section>
    Message: {{ msg }}
    <q-input v-model="inputData"
      outlined
      bottom-slots
      label="DebounceEx"
      counter
      :dense="true"
    />
  </q-card-section>
  <q-separator />

	<!--HTML 출력하기-->
  <q-card-section>Using text interpolation: {{ rawHtml }}</q-card-section>
  <q-card-section>Using v-html directive: <span v-html="rawHtml"></span></q-card-section>
  <q-separator />

  <!--속성 바인딩, 단축 문법-->
  <q-card-section>
    <q-btn
      unelevated
      color="primary"
      type="a"
      target="_blank"
      v-bind:id="linkId"
      v-bind:href="link.to"
      :title="link.title"
      :label="link.label"
    ></q-btn>
  </q-card-section>
  <q-separator />

  <!--불리언(Boolean) 속성-->
  <q-card-section>
    <q-btn :disable="isButtonDisabled" label="버튼 보이기"></q-btn>
  </q-card-section>
  <q-separator />

  <!--JavaScript 표현식 사용-->
  <q-card-section>
    {{ number + 1 }}
  </q-card-section>
  <q-separator />
  <q-card-section>{{ ok ? "YES" : "NO" }}</q-card-section>
  <q-separator />
  <q-card-section>
    {{ message.split("").reverse().join("") }}
  </q-card-section>
  <q-separator />
  <q-card-section :id="`list-${id}`"> list-{{ id }} </q-card-section>
  <q-separator />

  <!--함수 호출-->
  <q-card-section class="text-h6">
    {{ calculateDate() }}
  </q-card-section>
  <q-separator />

  <!--디렉티브-->
  <q-card-section v-if="!seen"> Now you see me </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
  <q-card-section v-else> on no! </q-card-section>
  <q-separator />
  <q-card-section v-if="type == 'A'"> A </q-card-section>
  <q-card-section v-else-if="type === 'B'"> B </q-card-section>
  <q-card-section v-else-if="type === 'C'"> C </q-card-section>
  <q-card-section v-else> Not A/B/C </q-card-section>
  <q-separator />

  <!--메서드 선언-->
  <div class="q-pa-md row items-start">
    <q-btn @click="increment" label="카운트" color="primary"></q-btn>
    <q-card-section>methodCount is: {{ methodCount }}</q-card-section>
  </div>
  <q-separator />

  <!--4.1 계산된 속성 : 기본 예제-->
  <q-card-section>책을 가지고 있다: {{ publishedBooksMessage }}</q-card-section>
	<q-separator />

  <!--4.2 계산된 캐싱 vs 메서드-->
  <q-card-section>책을 가지고 있다: {{ calculateBooksMessage() }}</q-card-section>
	<q-separator />

  <!--4.3 계산된 캐싱 vs 메서드 : 예제-->
  <q-card-section class="text-h6">
    {{ toTitleDate }}
    {{ calculateDate() }}
  </q-card-section>
	<q-separator />

  <!--4.4 수정 가능한 계산된 속성-->
  <q-card-section class="text-h6">
    {{ fullName }}
  </q-card-section>
	<q-separator />

  <!--5.1 객체로 바인딩하기 - 여기 3개는 모두 동일한 결과를 보여줍니다. -->
  <q-card-section :class="{active:isActive, 'text-h3': hasError}"> change color</q-card-section>
  <q-card-section class="static" :class="{active:isActive, 'text-h3': hasError}"> change color</q-card-section>
  <div class="static active"></div>
  <q-card-section :class="classObject"> change color</q-card-section>
  <q-card-section :class="classObj"> change color</q-card-section>
  <!--뭐지? 얘만 검은색 큰 글자로 나오네?-->

  <!--배열로 바인딩 하기-->
  <q-card-section :class="[activeClass, errorClass]"> change color</q-card-section>
  <div class="active text-danger"></div>
  <q-card-section :class="[isActive ? activeClass :'', errorClass]"> change color</q-card-section>
  <q-card-section :class="[{active:isActive}, errorClass]"> change color</q-card-section>

  <!--컴포넌트에서 사용하기-->
  <!-- 자식 컴포넌트의 템플릿 components/ClassChild.vue 생성 -->
  <q-card-section :class="{foo:true, bar:true}">안녕!</q-card-section>



  <!--5.3 컴포넌트에서 사용하기-->
  <!-- 컴포넌트가 사용될 때  -->
  <class-child></class-child>
  <!-- 컴포넌트가 사용시 클래스 추가 -->
  <class-child :class="[baz, boo]"></class-child>
  <!-- 컴포넌트가 사용시 active 클래스 추가 -->
  <class-child :class="{ active: isActive }"></class-child>

  <div class="foo bar"></div>
  <div class="foo bar baz boo"></div>

  <div class="foo bar active"></div>

  <!-- MyComponent 템플릿에서 $attrs 속성을 사용  :id="$attrs.id" 추가 -->
  <q-card-section :class="{foo:true, bar:true}" :id="$attrs.id">안녕!</q-card-section>

  <class-child id="hi"></class-child>

  <div class="foo bar" id="hi"></div>


  <!--5.4 인라인 스타일 바인딩-->
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

  <q-card-section :style="styleObject"> change color</q-card-section>

  <!--5.4 인라인 스타일 바인딩 : 배열로 바인딩 하기-->
  <q-card-section :style="[baseStyles, overridingStyles]"> change color</q-card-section>

  <!--5.4 인라인 스타일 바인딩 : 접두사 자동완성 (다중 값)-->
  <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }"></div>


  <!--6.1 v-if-->
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>

  <!--6.2 v-else-->
  <q-btn @click="awesome = !awesome" label="toggle"></q-btn>
  <q-card-section v-if="awesome"> Vue is awesome! </q-card-section>
  <q-card-section v-else> on no! </q-card-section>

  <!--6.3 v-else-if-->
  <q-card-section v-if="type == 'A'"> A </q-card-section>
  <q-card-section v-else-if="type === 'B'"> B </q-card-section>
  <q-card-section v-else-if="type === 'C'"> C </q-card-section>
  <q-card-section v-else> Not A/B/C </q-card-section>

  <!--6.4 <template>에서 v-if-->
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-if="ok" dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>

  <!--6.5 v-show-->
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      v-show="ok"
      dark
      bordered
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>


  <!--7.1 v-for-->
  <div class="q-pa-md">
    <q-list v-for="(item,idx) in listItems" :key="idx" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ idx + 1 }}. {{ item.message }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />

  <div class="q-pa-md">
    <q-list v-for="(item, index) in listItems" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>
            {{ parentMessage }} - {{ index + 1 }} - {{ item.message }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />

  <div class="q-pa-md">
    <q-list v-for="({message}, index) in listItems" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ message }} - {{ index + 1 }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />

  <div class="q-pa-md">
    <q-list v-for="(item, index) in tupleListItems" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section v-for="(childItem, index) in item.children" :key="index">
          <q-item-section>{{ item.message }} - {{ childItem }}</q-item-section>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />

  <div class="q-pa-md">
    <q-list v-for="({message}, index) of listItems" :key="index" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ message }} - {{ index }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />


  <!--7.2 객체에 v-for 사용하기-->
  <div class="q-pa-md">
    <q-list
      v-for="(value, key, index) in myObject"
      :key="index"
      bordered
      separator
    >
      <q-item clickable v-ripple>
        <q-item-section
          >{{ index + 1 }}. {{ key }} : {{ value }}</q-item-section
        >
      </q-item>
    </q-list>
  </div>
  <q-separator />


  <!--7.3 숫자 범위에 v-for 사용하기-->
  <div class="q-pa-md row items-start">
    <q-list v-for="n in 10" :key="n" bordered separator>
      <q-item clickable v-ripple>
        <q-item-section>{{ n }}</q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-separator />


  <!--7.4 컴포넌트에 v-for 사용하기-->
  <div class="q-pa-md items-start">
    <my-component
      v-for="(item, index) in listItems"
      :key="index"
      :item="item"
      :index="index"
    ></my-component>
  </div>
  <q-separator />

  <!--7.5 배열 교체-->
  <q-card-section>{{ filterItems }}</q-card-section>


  <!--7.6 필터링/정렬 결과 표시하기-->
  <q-list v-for="n in evenNumbers" :key="n" bordered separator>
    <q-item clickable v-ripple>
      <q-item-section>{{ n }}</q-item-section>
    </q-item>
  </q-list>


  <!--8.1 인라인 핸들러-->
  <div class="q-pa-md row items-start">
    <q-btn @click="count++" label="카운트" color="primary"></q-btn>
    <q-card-section>Count is: {{ count }}</q-card-section>
  </div>
  <q-separator />


  <!--8.2 메서드 핸들러-->
  <!-- `greet`는 위에서 정의한 메서드의 이름입니다. -->
  <div class="q-pa-md row items-start">
    <!--https://quasar.dev/quasar-plugins/notify#introduction -->
    <q-btn
      @click="greet"
      label="greet"
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
    <!--https://quasar.dev/quasar-plugins/dialog#introduction-->
    <q-btn label="Alert" color="primary" @click="alert" class="q-ma-sm" />
    <q-btn label="Confirm" color="primary" @click="confirm" class="q-ma-sm" />
    <q-btn label="Prompt" color="primary" @click="prompt" class="q-ma-sm" />
  </div>
  <q-separator />


  <!--8.3 인라인 핸들러에서 메서드 호출하기-->
  <div class="q-pa-md row items-start">
    <q-btn
      @click="say('안녕')"
      label="안녕이라고 말하기"
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
    <q-btn
      @click="say('잘가')"
      label="잘가라고 말하기"
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
  </div>


  <!--8.4 인라인 핸들러에서 이벤트 객체 접근하기-->
  <div class="q-pa-md row items-start">
    <q-btn
      @click="warn('아직 양식을 제출할 수 없습니다.', $event)"
      label="아직 양식을 제출할 수 없습니다."
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
    <q-btn
      @click="(event) => warn('아직 양식을 제출할 수 없습니다1.', event)"
      label="아직 양식을 제출할 수 없습니다1"
      color="secondary"
      class="q-ma-sm"
    ></q-btn>
  </div>
  <q-separator />

  <!--8.5 이벤트 수식어-->
  <div class="q-pa-md row items-start">
  <!-- 클릭 이벤트 전파가 중지됩니다. -->
    <q-btn label="stop" color="primary" @click.stop="doThis" class="q-ma-sm" />

  <!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
    <q-form
      label="prevent"
      color="primary"
      @submit.prevent="doThis"
      class="q-ma-sm"
    >
      <q-input v-model="name" />
      <q-btn label="submit" type="submit"></q-btn>
    </q-form>

  <!-- 수식어를 연결할 수 있습니다. -->
    <q-btn
      label="stopPrevent"
      color="primary"
      @click.stop.prevent="doThis()"
      class="q-ma-sm"
    />

  <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
    <q-form
      label="prevent"
      color="primary"
      @submit.prevent
      class="q-ma-sm"
    >
      <q-input v-model="name" />
      <q-btn label="submit" type="submit"></q-btn>
    </q-form>

  <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
  <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->

    <q-btn label="self" color="primary" @click.self="doThis" class="q-ma-sm" />
  </div>




  <!--9.0-->
  <q-card-section class="col-4">
      <q-input
        outlined
        bottom-slots
        v-model.lazy="text"
        label="Label"
        counter
        :dense="true"
      >
        <template v-slot:prepend>
          <q-icon name="place"/>
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint> Field hint </template>
      </q-input>
    </q-card-section>


  <!--9.1 기본 사용법 : 텍스트-->
  <!--메세지 입력하기 : {{ text }}-->
  <q-input
          outlined
          bottom-slots
          v-model.lazy="text"
          label="Label"
          counter
          :dense="true"
        >
          <template v-slot:prepend>
            <q-icon name="place"/>
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="text = ''" class="cursor-pointer" />
          </template>

          <template v-slot:hint> Field hint </template>
    </q-input>

  <!--9.2 기본 사용법 : 여러 줄 텍스트-->
  <span>여러 줄 메세지:</span>
  <p style="white-space: pre-line;">{{ textArea}}</p>
  <div class="q-pa-md" style="max-width: 300px">
    <q-input
      v-model="textArea"
      filled
      type="textarea"
    />
  </div>



  <!--9.3 기본 사용법 : 체크박스-->
  <!--select https://quasar.dev/vue-components/option-group-->
  <q-card-section class="col-4 q-mt-md">
    <q-option-group
      v-model="group"
      :options="opts"
      color="green"
      type="checkbox"
    />
    {{ group }}
  </q-card-section>


  <!--9.4 기본 사용법 : 라디오-->
  <!--checkbox https://quasar.dev/vue-components/radio-->
  <q-card-section class="col-4 q-mt-md">
      <q-radio v-model="color" val="teal" label="Teal" color="teal" />
      <q-radio v-model="color" val="orange" label="Orange" color="orange" />
      <q-radio v-model="color" val="red" label="Red" color="red" />
      <q-card-seciton>
        {{ color }}
      </q-card-seciton>
    </q-card-section>

  <!--9.5 기본 사용법 : 셀렉트-->
  <!--select  https://quasar.dev/vue-components/select-->
  <q-card-section class="col-4">
    <q-select
      filled
      bottom-slots
      v-model="model"
      :options="options"
      label="Label"
      counter
      dense
      :options-dense="false"
    >
      <template v-slot:prepend>
        <q-icon name="place" @click.stop.prevent />
      </template>
      <template v-slot:append>
        <q-icon
          name="close"
          @click.stop.prevent="model = ''"
          class="cursor-pointer"
        />
      </template>

      <template v-slot:hint> Field hint </template>
    </q-select>
  </q-card-section>


  <!--9.6 기본 사용법 : 다중 선택-->
  <!---multiple-->
  <q-select
          filled
          v-model="model2"
          multiple
          :options="options"
          counter
          max-values="2"
          hint="Max 2 selections"
          style="width: 250px"
        />


  <!--9.7 값 바인딩하기 : 체크박스-->
  <!--toggle https://quasar.dev/vue-components/toggle-->
  <q-card-section class="col-4 q-mt-md">
    <q-toggle v-model="value" color="green" label="On Right"  true-value="네"
      false-value="아니오"/> {{value}}
  </q-card-section>

  <!--toggle https://quasar.dev/vue-components/toggle-->
  <q-card-section class="col-4 q-mt-md">
    <q-toggle v-model="value1" color="green" label="On Right"  :true-value="dynamicTrueValue"
      :false-value="dynamicFalseValue"/>
			{{value1}}
  </q-card-section>


  <!--9.8 값 바인딩하기 : 라디오-->
  <q-card-section class="col-4 q-mt-md">
    <q-radio v-model="color1" :val="first" label="Teal" color="teal" />
    <q-radio v-model="color1" :val="second" label="Orange" color="orange" />
    <q-card-section>
      {{ color1 }}
    </q-card-section>
  </q-card-section>

  <!--9.9 값 바인딩하기 : 셀렉트 옵션-->
  <select v-model="selected">
    <!-- 인라인 객체 리터럴 -->
    <option :value="{ number: 123 }">123</option>
  </select>

  <!--11.1 감시자 기본 예제-->
  <p>
    예/아니오 질문:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>


  <!--12.1 ref로 접근하기-->
  <input ref="input" />

  <!--12.2 v-for 내부에서 ref 사용하기-->
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>



  <!--13.1 컴포넌트 정의하기-->
  <button @click="count++">당신은 {{ count }} 번 클릭했습니다.</button>

  <button @click="count++">
    당신은 {{ count }} 번 클릭했습니다.
  </button>



</template>

<!-------------------------------------------------------------------------------------------------->

<script>

  import { date } from 'quasar'         // 함수 호출
  import { nextTick } from 'vue'        // DOM 업데이트 타이밍
  import { debounce } from 'lodash'   // lodash 플러그인
  import ClassChild from "components/ClassChild.vue"  // 5.3 컴포넌트에서 사용하기


  export default { // 텍스트 보간법
    name: 'VueEx',
    title: "Vue Basic",
    components: {ClassChild},   // 5.3 컴포넌트에서 사용하기
    data: () => ({ count: 0 }), // 11.4 콜백 실행 타이밍


    // return =================================================================================
    data() {


      return {
        msg: "hello Vue",

        rawHtml: `<span style="color: red">빨간색이어야 합니다.</span>`,    // HTML 출력하기

        // 속성 바인딩, 단축 문법
        linkId: "vue",
	      link: {
	        to: "http://vuejs.org",
	        title: "뷰 공식 사이트",
	        label: "Vuejs.org",
	      },

        isButtonDisabled: true,   // 불리언(Boolean) 속성

        // JavaScript 표현식 사용
        ok: true,
				number: 1000,
	      message:
	        "지금까지 템플릿의 단순한 속성만 있었습니다. 그러나 Vue는 실제로 모든 데이터가 내에서 JavaScript 강화의 모든 기능을 지원합니다.",
	      id: "babychoomp",

        // 디렉티브
        seen: true,
	      awesome: true,
	      type: "B",

        // 반응형 상태 설정, 메서드 선언
        methodCount: 1,

        // 깊은 반응형
        obj: {
        nested: { count: 0 },
        arr: ['foo', 'bar']
        },

        inputData:'',   // lodash 플러그인

        // 4.1 계산된 속성 : 기본 예제
        author: {
          name: 'John Doe',
          books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
          ]
        },

        // 4.3 계산된 캐싱 vs 메서드 : 예제
        str:'',

        // 4.4 수정 가능한 계산된 속성
        firstName: 'John',
        lastName: 'Doe',

        // 5.1 객체로 바인딩 하기
        isActive: true,
        hasError: false,

        classObject: {
          active: true,
          'text-h3': false
        },

        isActive: true,
        error: null,

        // 5.2 배열로 바인딩 하기
        activeClass: 'active',
        errorClass: 'text-danger',

        // 5.4 인라인 스타일 바인딩
        activeColor: 'red',
        fontSize: 30,


        styleObject: {
          color: 'red',
          fontSize: '13px'
        },

        // 5.4 인라인 스타일 바인딩 - 배열로 바인딩 하기
        baseStyles:{
          textDecorationLine:'underline',
          textDecorationThickness: '5px',
          textDecorationColor: 'red',
        },
        overridingStyles:{
          color:'blue',
          fontSize:'35px',
        },

        // 6.1 v-if
        awesome: true,

        // 6.3 v-else-if
        type: "B",

        // 6.4 <template>에서 v-if
        ok: true,


        // 7.1 v-for
        listItems: [{ message: "Foo" }, { message: "Bar" }],

        parentMessage: 'Parent',
		    listItems: [{ message: "Foo" }, { message: "Bar" }],

        tupleListItems: [{ message: "Foo", children:["baby"] }, { message: "Bar",children:['child'] }],


        // 7.2 객체에 v-for 사용하기
        myObject: {
          title: 'Vue에서 목록을 작성하는 방법',
          author: '홍길동',
          publishedAt: '2016-04-10'
        },

        // 7.5 배열 교체
        items: [{ message: "Foo" }, { message: "Bar" }],


        // 7.6 필터링/정렬 결과 표시하기
        numbers: [1, 2, 3, 4, 5],

        sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],


        // 8.1 인라인 핸들러
        count: 0,

        // 8.2 메서드 핸들러
        name: "Vue.js",



        // 9.0
        text: "",

        // 9,2
        textArea: '', // "textArea" 속성을 data 객체에서 정의합니다.

        // 9.3 기본 사용법 : 체크박스
        group: ["op1"],
        opts: [
          {
            label: "Option 1",
            value: "op1",
          },
          {
            label: "Option 2",
            value: "op2",
          },
          {
            label: "Option 3",
            value: "op3",
          },
        ],

        // 9.4 기본 사용법 : 라디오
        color: "",

        // 9.5 기본 사용법 : 셀렉트
        options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
        model: null,

        // 9.6 기본 사용법 : 다중 선택
        model2:[],

        // 9.7 값 바인딩하기 : 체크박스
        value:"네",

        value1:"No",
        dynamicTrueValue:"Yes",
        dynamicFalseValue:"No",

        // 9.8 값 바인딩하기 : 라디오
        color1:"",
        first:"첫번째선택",
        second:"두번째선택",

        selected : "",


        // 11.1 감시자 기본 예제
        question: '',
        answer: '질문에는 일반적으로 물음표가 포함됩니다.',



        // 12.2 v-for 내부에서 ref 사용하기
        list: [
          /* ... */
        ],



        // 13.1 컴포넌트 정의하기
        count: 0

      }
      // return =================================================================================

    },


    computed: {
      // 4.1 계산된 속성 : 기본 예제
      // 계산된 값을 반환하는 속성
      publishedBooksMessage() {
        // `this`는 컴포넌트 인스턴스를 가리킵니다.
        return this.author.books.length > 0 ? 'Yes' : 'No'
      },

      // 4.3 계산된 캐싱 vs 메서드 : 예제
      toTitleDate() {
        const timeStamp = Date.now();
        const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
        return formattedString;
      },

      //4.4 수정 가능한 계산된 속성
      fullName: {
        // getter
        get() {
          return this.firstName + ' ' + this.lastName
        },

        // setter
        set(newValue) {
          // 참고: 분해 할당 문법을 사용함.
          [this.firstName, this.lastName] = newValue.split(' ')
        }
      },

      // 5.1 객체로 바인딩 하기
      classObj() {
        return {
          active: this.isActive && !this.error,
          'text-h3': this.error && this.error.type === 'fatal'
        }
      },

      // 7.5 배열 교체
      filterItems() {
        return (this.items = this.items.filter((item) =>
          item.message.match(/Foo/)
        ));
      },


      // 7.6 필터링/정렬 결과 표시하기
      evenNumbers() {
        return this.numbers.filter(n => n % 2 === 0)
      }

    },
    // =================================================================================
    watch:{
      // lodash 플러그인
      inputData: debounce(function(newVal,oldVal){
	      // 처리로직 작성
	      console.log(newVal,oldVal);
	    },500),

      // 11.1 감시자 기본 예제
      // 질문이 변경될 때마다 이 함수가 실행됩니다
      question(newQuestion, oldQuestion) {
        if (newQuestion.includes('?')) {
          this.getAnswer()
        }
      },

      // 참고: 단순 경로만 가능합니다. 표현식은 지원되지 않습니다.
      'some.nested.key'(newValue) {
        // ...
      },

      // 11.2 깊은 감시자
      someObject: {
        handler(newValue, oldValue) {
          // 참고:
          // someObject가 다른 객체로 교체되지 않는 한,
          // newValue와 oldValue는 같습니다.
          // 둘 다 동일한 객체를 참고하고 있기 때문입니다!
        },
        deep: true
      },

      // 11.3 열성적인 감시자
      question: {
        handler(newQuestion) {
          // 이제 컴포넌트 생성 시
          // `beforeCreate`와 `created` 훅 사이에
          // 한 번 실행됩니다.
        },
        // 열성적으로 콜백 실행
        immediate: true
      },

      // 11.4 콜백 실행 타이밍
      key: {
        handler() {},
        flush: 'post'
      },

      count: {
        handler(val, preVal) {
          console.log('변경이 감지됨!', val, preVal)
        },
        flush: 'sync'
      },

    },
    // =================================================================================
    // `mounted`는 나중에 설명할 생명 주기 훅입니다.
    mounted(){

      // 반응형 상태 설정
      // `this`는 컴포넌트 인스턴스를 나타냅니다.
      console.log(this.methodCount) // => 1
      // 값을 변경할 수 있습니다.
      this.methodCount= 2
      console.log(this.methodCount) // => 2

      // 메서드 선언
      // 메서드는 생명 주기 훅 또는 다른 메서드에서 호출할 수 있습니다!
      this.increment()

      // 5.1 객체로 바인딩 하기
      // 인스턴트 생성시 this.error 데이터 넣어서 에러처리
      this.error = {};
      this.error.type = 'fatal';

      // 10. 생명주기 훅 등록하기
      console.log(`컴포넌트가 마운트 됐습니다.`)


      // 12.1 ref로 접근하기
      this.$refs.input.focus()

      // 12.2 v-for 내부에서 ref 사용하기
      console.log(this.$refs.items)

    },
    // =================================================================================
    methods:{
      // 함수 호출
      calculateDate() {
        const timeStamp = Date.now();
        const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm");
        return formattedString;
      },

      // 메서드 선언
      increment() {
        this.methodCount++
        console.log('methodCount',this.methodCount);

        this.count++
        nextTick(() => {
          // 업데이트된 DOM에 접근 가능
        })
      },

      // 깊은 반응형
      mutateDeeply() {
        // 변경 사항이 감지됩니다.
        this.obj.nested.count++
        this.obj.arr.push('baz')
      },

      // 메서드 상태 유지
      click() {
        // ... 클릭에 응답 ...
      },

      // 4.2 계산된 캐싱 vs 메서드
      // 컴포넌트 내에서
      calculateBooksMessage() {
        return this.author.books.length > 0 ? 'Yes' : 'No'
      },

      //4.3 계산된 캐싱 vs 메서드 : 예제
      calculateDate() {
        setInterval(()=>{
          const timeStamp = Date.now();
          const formattedString = date.formatDate(timeStamp, "YYYY-MM-DD HH:mm:ss");
          this.str = formattedString;
        }, 1000);
        return this.str; // binding 되는 변수 필요
	    },


      // 7.6 필터링/정렬 결과 표시하기
      even(numbers) {
          return numbers.filter(number => number % 2 === 0)
        },


      // 8.2 메서드 핸들러
      // 'event'는 네이티브 DOM 이벤트 객체입니다.
      greet(e) {
        // `this`는 메서드가 활성화된 현재 인스턴스를 가리킵니다.
        this.$q.notify({
          message: `hello ${this.name}!`,
          caption: "5 minutes ago",
          color: "secondary",
        });
      },

      // 8.3 인라인 핸들러에서 메서드 호출하기
      say(message) {
        alert(message)
      },


      // 8.4 인라인 핸들러에서 이벤트 객체 접근하기
      warn(message, event){
          if (event) {
            event.preventDefault();
            this.$q
            .dialog({
              title: "Alert",
              message: `${message}`,
            })
            .onOk(() => {
              // console.log('OK')
            })
            .onCancel(() => {
              // console.log('Cancel')
            })
            .onDismiss(() => {
              // console.log('I am triggered on both OK and Cancel')
            });
          }
      },


      // 8.5 이벤트 수식어
      doThis(event) {
        console.log(event)
        this.$q.notify({
          color: "green-5",
          textColor: "white",
          icon: "warning",
          message: `doThis pointerType`,
        });
        console.log("doThis pointerType", event);
      },
      doThat(event) {
        this.$q.notify({
          color: "yellow-5",
          textColor: "white",
          icon: "warning",
          message: `doThat pointerType`,
        });
        console.log("doThat event", event);
      },


      // 11.1 감시자 기본 예제
      async getAnswer() {
        this.answer = '생각 중...'
        try {
          const res = await fetch('https://yesno.wtf/api')
          this.answer = (await res.json()).answer === 'yes' ? '네' : '아니오'
        } catch (error) {
          this.answer = '에러! API에 연결할 수 없습니다. ' + error
        }
      },

      // 11.4 콜백 실행 타이밍
      increment() {
        this.count++
        // 이어서 callback이 실행됨
        this.count++
        // 역시 callback이 실행됨
        this.count++
        // 또 callback이 실행됨
      }

    },

    // =================================================================================
    // 메서드 상태유지
    created() {
      // 이제 각 인스턴스는 자체적인 디바운스된 핸들러를 가집니다.
      this.debouncedClick = _.debounce(this.click, 500)

      // 11.5 this.$watch()
      this.$watch('question', (newQuestion) => {
        // ...
      })
    },

    // =================================================================================
    unmounted() {
      // 컴포넌트가 제거된 후
      // 타이머를 취소하는 것은 좋은 방법입니다.
      this.debouncedClick.cancel()
    },

  }
</script>

<!-------------------------------------------------------------------------------------------------->

<!--5.1 객체로 바인딩 하기-->
<style scoped>
	.active{
	  color:red;
	}
</style>

<!--6.4 <template>에서 v-if-->
<style scoped>
  .my-card {
	  width: 100%;
	  max-width: 250px;
	}
</style>
