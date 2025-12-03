// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package khulnasoftapi_test

import (
	"context"
	"errors"
	"os"
	"testing"
	"time"

	"github.com/stainless-sdks/khulnasoft-api-go"
	"github.com/stainless-sdks/khulnasoft-api-go/internal/testutil"
	"github.com/stainless-sdks/khulnasoft-api-go/option"
)

func TestStoreOrderNewWithOptionalParams(t *testing.T) {
	t.Skip("Prism tests are disabled")
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := khulnasoftapi.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	_, err := client.Store.Order.New(context.TODO(), khulnasoftapi.StoreOrderNewParams{
		Order: khulnasoftapi.OrderParam{
			ID:       khulnasoftapi.Int(10),
			Complete: khulnasoftapi.Bool(true),
			PetID:    khulnasoftapi.Int(198772),
			Quantity: khulnasoftapi.Int(7),
			ShipDate: khulnasoftapi.Time(time.Now()),
			Status:   khulnasoftapi.OrderStatusApproved,
		},
	})
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestStoreOrderGet(t *testing.T) {
	t.Skip("Prism tests are disabled")
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := khulnasoftapi.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	_, err := client.Store.Order.Get(context.TODO(), 0)
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestStoreOrderDelete(t *testing.T) {
	t.Skip("Prism tests are disabled")
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := khulnasoftapi.NewClient(
		option.WithBaseURL(baseURL),
		option.WithAPIKey("My API Key"),
	)
	err := client.Store.Order.Delete(context.TODO(), 0)
	if err != nil {
		var apierr *khulnasoftapi.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}
