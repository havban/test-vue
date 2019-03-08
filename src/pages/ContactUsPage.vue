<template>
  <div>
    <div>
      <label>
        Full Name:
        <input
          type="text"
          class="contact-input"
          v-model="formData.fullName"
          />
      </label>
    </div>
    <div>
      <label>
        Email:
        <input type="email"
               v-model="formData.email"/>
        <div class="error" v-if="!isEmailValid">
          Email format is incorrect
        </div>
      </label>
    </div>
    <div>
      <label>
        Description:
        <textarea
          v-model="formData.description">
        </textarea>
      </label>
    </div>
    <div>
      <button
        @click="submitData">
        Submit
      </button>
    </div>
    <div>
      Data:<br/>
      {{formData}}
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'ContactUsPage',
  data () {
    return {
      formData: {
        fullName: '',
        email: '',
        description: ''
      }
    }
  },
  methods: {
    submitData () {
      if (!this.isInputValid) {
        alert('please fix data')
        return
      }

      alert(JSON.stringify(this.formData))
      axios.post('/api/contact-us', this.formData)
      alert('data submitted')
    }
  },
  computed: {
    isInputValid () {
      const data = this.formData
      if (!data.fullName ||
        !data.email ||
        !data.description ||
        !this.isEmailValid) {
        return false
      }
      return true
    },
    isEmailValid () {
      return this.formData.email.indexOf('@') > 0
    }
  }
}
</script>

<style scoped>

label {
  display: block;
  padding-top: 20px;
}
.error {
  color: red;
}
</style>
