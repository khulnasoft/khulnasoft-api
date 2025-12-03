// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

package khulnasoftapi

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"slices"
	"time"

	"github.com/stainless-sdks/khulnasoft-api-go/internal/apijson"
	shimjson "github.com/stainless-sdks/khulnasoft-api-go/internal/encoding/json"
	"github.com/stainless-sdks/khulnasoft-api-go/internal/requestconfig"
	"github.com/stainless-sdks/khulnasoft-api-go/option"
	"github.com/stainless-sdks/khulnasoft-api-go/packages/param"
	"github.com/stainless-sdks/khulnasoft-api-go/packages/respjson"
)

// StoreOrderService contains methods and other services that help with interacting
// with the khulnasoft-api API.
//
// Note, unlike clients, this service does not read variables from the environment
// automatically. You should not instantiate this service directly, and instead use
// the [NewStoreOrderService] method instead.
type StoreOrderService struct {
	Options []option.RequestOption
}

// NewStoreOrderService generates a new service that applies the given options to
// each request. These options are applied after the parent client's options (if
// there is one), and before any request-specific options.
func NewStoreOrderService(opts ...option.RequestOption) (r StoreOrderService) {
	r = StoreOrderService{}
	r.Options = opts
	return
}

// Place a new order in the store
func (r *StoreOrderService) New(ctx context.Context, body StoreOrderNewParams, opts ...option.RequestOption) (res *Order, err error) {
	opts = slices.Concat(r.Options, opts)
	path := "store/order"
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodPost, path, body, &res, opts...)
	return
}

// For valid response try integer IDs with value <= 5 or > 10. Other values will
// generate exceptions.
func (r *StoreOrderService) Get(ctx context.Context, orderID int64, opts ...option.RequestOption) (res *Order, err error) {
	opts = slices.Concat(r.Options, opts)
	path := fmt.Sprintf("store/order/%v", orderID)
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodGet, path, nil, &res, opts...)
	return
}

// For valid response try integer IDs with value < 1000. Anything above 1000 or
// nonintegers will generate API errors
func (r *StoreOrderService) Delete(ctx context.Context, orderID int64, opts ...option.RequestOption) (err error) {
	opts = slices.Concat(r.Options, opts)
	opts = append([]option.RequestOption{option.WithHeader("Accept", "*/*")}, opts...)
	path := fmt.Sprintf("store/order/%v", orderID)
	err = requestconfig.ExecuteNewRequest(ctx, http.MethodDelete, path, nil, nil, opts...)
	return
}

type Order struct {
	ID       int64     `json:"id"`
	Complete bool      `json:"complete"`
	PetID    int64     `json:"petId"`
	Quantity int64     `json:"quantity"`
	ShipDate time.Time `json:"shipDate" format:"date-time"`
	// Order Status
	//
	// Any of "placed", "approved", "delivered".
	Status OrderStatus `json:"status"`
	// JSON contains metadata for fields, check presence with [respjson.Field.Valid].
	JSON struct {
		ID          respjson.Field
		Complete    respjson.Field
		PetID       respjson.Field
		Quantity    respjson.Field
		ShipDate    respjson.Field
		Status      respjson.Field
		ExtraFields map[string]respjson.Field
		raw         string
	} `json:"-"`
}

// Returns the unmodified JSON received from the API
func (r Order) RawJSON() string { return r.JSON.raw }
func (r *Order) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

// ToParam converts this Order to a OrderParam.
//
// Warning: the fields of the param type will not be present. ToParam should only
// be used at the last possible moment before sending a request. Test for this with
// OrderParam.Overrides()
func (r Order) ToParam() OrderParam {
	return param.Override[OrderParam](json.RawMessage(r.RawJSON()))
}

// Order Status
type OrderStatus string

const (
	OrderStatusPlaced    OrderStatus = "placed"
	OrderStatusApproved  OrderStatus = "approved"
	OrderStatusDelivered OrderStatus = "delivered"
)

type OrderParam struct {
	ID       param.Opt[int64]     `json:"id,omitzero"`
	Complete param.Opt[bool]      `json:"complete,omitzero"`
	PetID    param.Opt[int64]     `json:"petId,omitzero"`
	Quantity param.Opt[int64]     `json:"quantity,omitzero"`
	ShipDate param.Opt[time.Time] `json:"shipDate,omitzero" format:"date-time"`
	// Order Status
	//
	// Any of "placed", "approved", "delivered".
	Status OrderStatus `json:"status,omitzero"`
	paramObj
}

func (r OrderParam) MarshalJSON() (data []byte, err error) {
	type shadow OrderParam
	return param.MarshalObject(r, (*shadow)(&r))
}
func (r *OrderParam) UnmarshalJSON(data []byte) error {
	return apijson.UnmarshalRoot(data, r)
}

type StoreOrderNewParams struct {
	Order OrderParam
	paramObj
}

func (r StoreOrderNewParams) MarshalJSON() (data []byte, err error) {
	return shimjson.Marshal(r.Order)
}
func (r *StoreOrderNewParams) UnmarshalJSON(data []byte) error {
	return json.Unmarshal(data, &r.Order)
}
