  this.vb = volumebar,

      this.goShowProgressBar = function() {
          $timeout(function() {
              if ($scope.usingVolumeBar == false) {
                  $scope.showingVolumeBar = false;
              }
          }, 1000);
      },
      this.goShowVolumeBar = function() {
          this.vb.style.display = 'block';
          $scope.showingVolumeBar = true;
      },
      this.goUseVolumeBar = function() {
          $scope.usingVolumeBar = true;
      },
      this.goHideVolumeBar = function() {
          $scope.usingVolumeBar = false;
          $scope.showingVolumeBar = false;
          $scope.volumePercentage = 100;
      },
      this.goMuteVolume = function() {
          if ($scope.volumePercentage == 0)
              this.setVolume(100);
          else
              this.setVolume(0);
      },
      this.setVolumeProgressLevel = function($event) {
          // need ti get object now when it shown
          var bv = document.getElementById('vprogressbar');
          var rect = bv.getBoundingClientRect();
          var vp = (($event.pageX - rect.left) / rect.width) * 100;
          this.setVolume(vp);
      },
      this.setVolume = function(newVolumePercentage) {
          $scope.video.volume = (newVolumePercentage / 100);
          $scope.volumePercentage = newVolumePercentage;
          if (newVolumePercentage == 0) {
              $scope.VolLevelUp = false;
              $scope.VolLevelDown = false;
              $scope.VolLevelOff = true;
          } else if (newVolumePercentage > 60) {
              $scope.VolLevelUp = true;
              $scope.VolLevelDown = false;
              $scope.VolLevelOff = false;
          } else {
              $scope.VolLevelUp = false;
              $scope.VolLevelDown = true;
              $scope.VolLevelOff = false;
          }
      }