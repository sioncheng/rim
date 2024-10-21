package conf

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
	"gopkg.in/yaml.v3"
)

func TestConfFromUserHomeConf(t *testing.T) {
	home, err := os.UserHomeDir()
	if err != nil {
		t.Fatalf("home error %v", err)
	}
	data, err := os.ReadFile(filepath.Join(home, ".rim/conf.yaml"))
	if err != nil {
		t.Fatalf("%v", err)
	}
	conf := Conf{}
	err = yaml.Unmarshal(data, &conf)
	if err != nil {
		t.Fatalf("%v", err)
	}

	assert.Equal(t, "https://im-api.siyult.com/", conf.Rim.ApiHost)

}