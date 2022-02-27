

export const state = () => ({
  items: [],
  item: {}
  })
  
  
  export const actions = {
    fetchInstructorCourses({commit}) {
      return this.$axios.$get('/api/v1/products/user-products')
        .then((courses) => {
          commit('setCourses', courses)
          return state.items
        })
        .catch(error => Promise.reject(error))
      },
      createCourse(_, courseData) {
        return this.$axios.$post('/api/v1/products', courseData)
      },
      updateCourseValue({commit} , {value , field}){
        commit('setCourseValue', {value , field})
      },
      updateLine({commit}, {index, value, field}) {
        commit('setLineValue', {index, value, field})
        // Surprise commit for next lectures (:
      },
      fetchCourseById({commit, state}, courseId) {
        return this.$axios.$get(`/api/v1/products/${courseId}`)
          .then(course => {
            commit('setCourse', course)
            return state.item
          })
      },
  }
  
  export const mutations = {
    setCourses(state, courses) {
      state.items = courses
    },

    setCourse(state, course) {
      state.item = course
    },
    setCourseValue(state , {value , field}) {
      state.item[field] = value

    },
    addLine(state , field){
      state.item[field].push({value: ''})

    },
    removeLine(state , {field,index}){
      state.item[field].splice(index , 1)
    } ,
    setLineValue(state, {index, value, field}) {
      state.item[field][index].value = value
  }
}
  