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

</template>

<!-------------------------------------------------------------------------------------------------->

<script>

  import { date } from 'quasar'         // 함수 호출
  import { nextTick } from 'vue'        // DOM 업데이트 타이밍
  import { debounce } from 'lodash';    // lodash 플러그인
  import ClassChild from "components/ClassChild.vue";   // 5.3 컴포넌트에서 사용하기


  export default { // 텍스트 보간법
    name: 'VueEx',
    title: "Vue Basic",
    components: {ClassChild},   // 5.3 컴포넌트에서 사용하기

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

      }


    },
    // return =================================================================================

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

    },
    // =================================================================================
    watch:{
      // lodash 플러그인
      inputData: debounce(function(newVal,oldVal){
	      // 처리로직 작성
	      console.log(newVal,oldVal);
	    },500)
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

    },

    // =================================================================================
    // 메서드 상태유지
    created() {
    // 이제 각 인스턴스는 자체적인 디바운스된 핸들러를 가집니다.
    this.debouncedClick = _.debounce(this.click, 500)
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
