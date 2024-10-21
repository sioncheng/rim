package conf

import (
	"log"
	"testing"

	"github.com/stretchr/testify/assert"
	"gopkg.in/yaml.v3"
)

var data = `
app_id: "appId"
app_key: appKey
tcp_host: tcpHost
api_host: apiHost
`

func TestParseRim(t *testing.T) {

	rim := Rim{}
	err := yaml.Unmarshal([]byte(data), &rim)
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	assert.Equal(t, "appId", rim.AppId)
	assert.Equal(t, "appKey", rim.AppKey)
	assert.Equal(t, "tcpHost", rim.TcpHost)
	assert.Equal(t, "apiHost", rim.ApiHost)
}