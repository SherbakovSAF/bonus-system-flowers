// checkRepeatClientInfo(){
          //      if(this.$store.state.clientStorage.find(e => e.number == this.selectedClient.number) != undefined){
          //           this.$store.commit('activeModalInfo', {text: `Номер ${this.selectedClient.number} уже есть в базе. Проверьте правильность написания`})
          //           return true
          //      }
          //      return false
          // },

          // if(this.selectedClient.number[0] == "+" && this.selectedClient.number.length < 12 ){
               //      this.$store.commit('activeModalInfo', {text: 'Количество цифр, при использовании кода +7 в номере, должно быть минимум 12'})
               //      return true
               // }

               // if(this.selectedClient.number[0] == "8" && this.selectedClient.number.length < 11 ){
               //      this.$store.commit('activeModalInfo', {text: 'Количество цифр, при использовании кода 8 в номере, должно быть минимум 11'})
               //      return true
               // }

               // if(this.formatNumber().length > 12){
               //      this.$store.commit('activeModalInfo', {text: 'Количество цифр в номере больше положенного'})
               //      return true
               // }